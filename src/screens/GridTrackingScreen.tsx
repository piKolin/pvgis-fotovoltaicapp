import { Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

export type NavigationProp = NativeStackNavigationProp<
	RootStackParamList,
	'GridTracking'
>;

const GridTrackingScreen = () => {
	const navigation = useNavigation<NavigationProp>();

	return (
		<SafeAreaView>
			<Text>GridTrackingScreen</Text>
		</SafeAreaView>
	);
};

export default GridTrackingScreen;
