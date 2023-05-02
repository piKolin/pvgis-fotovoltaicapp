import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	setLocation,
	setLocationPermission,
} from '../features/location/locationSlice';

type UseLocationData<T> = {
	permission: boolean;
	error: string | null;
};

export const useLocation = <T>(): UseLocationData<T> => {
	const [permission, setPermission] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	const dispatch = useDispatch();

	useEffect(() => {
		_getLocation();
	}, []);

	const _getLocation = async () => {
		const { status } = await Location.requestForegroundPermissionsAsync();

		if (status !== 'granted') {
			setError('Permission to access location was denied');
			setPermission(false);
			dispatch(setLocationPermission(false));
			return;
		}
		const {
			coords: { latitude, longitude },
		} = await Location.getCurrentPositionAsync({});
		dispatch(
			setLocation({
				latitude: latitude.toFixed(4),
				longitude: longitude.toFixed(4),
			})
		);
	};

	return { permission, error };
};
