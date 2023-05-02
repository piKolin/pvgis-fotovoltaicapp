import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './src/store/store';
import { Provider } from 'react-redux';
import HomeScreen from './src/screens/HomeScreen';
import GridTrackingScreen, {
	GridTrackingFormData,
} from './src/screens/GridTrackingScreen';
import LocationScreen from './src/screens/LocationScreen';

export type RootStackParamList = {
	Home: undefined;
	GridTrackingScreen: undefined;
	Location: undefined;
	BarChartResults: { data: GridTrackingFormData };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
	const Stack = createNativeStackNavigator();

	return (
		<NavigationContainer>
			<Provider store={store}>
				<Stack.Navigator initialRouteName="Home">
					<Stack.Screen
						name="Home"
						component={HomeScreen}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name="GridTrackingScreen"
						component={GridTrackingScreen}
						options={{
							headerShown: false,
							// contentStyle: { backgroundColor: 'transparent' },
						}}
					/>
					<Stack.Screen
						name="Location"
						component={LocationScreen}
						options={{
							headerShown: false,
							presentation: 'modal',
						}}
					/>
				</Stack.Navigator>
			</Provider>
		</NavigationContainer>
	);
}
