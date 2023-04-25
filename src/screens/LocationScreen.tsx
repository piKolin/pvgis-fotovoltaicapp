import { View, TouchableOpacity } from 'react-native';
import React, { useEffect, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useLocation } from '../hooks/useLocation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useNavigation } from '@react-navigation/native';

export type NavigationProp = NativeStackNavigationProp<
	RootStackParamList,
	'Location'
>;

const LocationScreen: React.FC = () => {
	const navigation = useNavigation<NavigationProp>();
	const mapRef = useRef<MapView>(null);
	const { data, loading, error } = useLocation();

	useEffect(() => {
		if (!data) return;

		const { latitude, longitude } = data;

		mapRef.current &&
			mapRef.current.animateToRegion({
				latitude,
				longitude,
				latitudeDelta: 0.005,
				longitudeDelta: 0.005,
			});
	}, [data]);

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

			{data && (
				<MapView
					ref={mapRef}
					className="flex-1"
					mapType="mutedStandard"
					loadingEnabled={true}
				>
					<Marker
						coordinate={{
							latitude: data.latitude,
							longitude: data.longitude,
						}}
						draggable
						flat
						pinColor="red"
					/>
				</MapView>
			)}
		</View>
	);
};

export default LocationScreen;
