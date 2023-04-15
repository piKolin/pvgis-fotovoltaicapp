import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import GridTrackingScreen from './src/screens/GridTrackingScreen';

export type RootStackParamList = {
	Home: undefined;
	GridTracking: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
	const Stack = createNativeStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name="GridTracking" component={GridTrackingScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
