import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

type Location = {
	latitude: number;
	longitude: number;
};

type UseLocationData<T> = {
	data: Location | null;
	loading: boolean;
	error: string | null;
};

export const useLocation = <T>(): UseLocationData<T> => {
	const [data, setData] = useState<Location | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	const getLocation = async () => {
		const { status } = await Location.requestForegroundPermissionsAsync();
		if (status !== 'granted') {
			setError('The location permission has not been granted.');
			setLoading(false);
			return;
		}
		const {
			coords: { latitude, longitude },
		} = await Location.getCurrentPositionAsync({
			accuracy: Location.LocationAccuracy.Highest,
		});
		setData({
			latitude: latitude,
			longitude: longitude,
		});
		setLoading(false);
	};

	useEffect(() => {
		getLocation();
	}, []);

	return { data, loading, error };
};
