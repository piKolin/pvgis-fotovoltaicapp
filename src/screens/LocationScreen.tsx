import { View, TouchableOpacity } from 'react-native';
import React, { useEffect, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useLocation } from '../hooks/useLocation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setEditMode, setLocation } from '../features/location/locationSlice';
import { RootState } from '../store/store';

export type NavigationProp = NativeStackNavigationProp<
	RootStackParamList,
	'Location'
>;

//TODO: Feedback while location is being established.

const LocationScreen: React.FC = () => {
	const navigation = useNavigation<NavigationProp>();
	const mapRef = useRef<MapView>(null);

	const dispatch = useDispatch();

	const { permission, error } = useLocation();

	const { location, editMode } = useSelector(
		(state: RootState) => state.location
	);

	useEffect(() => {
		return () => {
			dispatch(setEditMode(false));
		};
	}, []);

	useEffect(() => {
		if (!location) return;

		const { latitude, longitude } = location;

		mapRef.current &&
			mapRef.current.animateToRegion({
				latitude,
				longitude,
				latitudeDelta: 0.005,
				longitudeDelta: 0.005,
			});
	}, [location]);

	// useEffect(() => {
	// 	if (!permission) {
	// 		navigation.goBack();
	// 	}
	// }, [permission]);

	return (
		<View className="flex-1">
			<TouchableOpacity
				onPress={navigation.goBack}
				className="absolute z-50 top-0 right-0 p-5"
			>
				<Ionicons
					name="md-close-circle-sharp"
					size={34}
					color="black"
				/>
			</TouchableOpacity>

			{location && (
				<MapView
					ref={mapRef}
					className="flex-1"
					mapType="mutedStandard"
					loadingEnabled={true}
				>
					<Marker
						coordinate={{
							latitude: location.latitude,
							longitude: location.longitude,
						}}
						draggable
						flat
						pinColor="red"
						onDragEnd={(e) => {
							const { latitude, longitude } =
								e.nativeEvent.coordinate;
							dispatch(
								setLocation({
									latitude: latitude.toFixed(4),
									longitude: longitude.toFixed(4),
								})
							);
						}}
					/>
				</MapView>
			)}
		</View>
	);
};

export default LocationScreen;
