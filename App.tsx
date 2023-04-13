import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, SafeAreaView } from 'react-native';

export default function App() {
	return (
		<SafeAreaView className="flex-1 items-center justify-center bg-red-600">
			<Text>Open up App.js to start working on your app!</Text>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}
