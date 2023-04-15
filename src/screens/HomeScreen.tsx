import { Image, ScrollView, View } from 'react-native';
import React from 'react';
import ActionButton from '../components/ActionButton';

const HomeScreen = () => {
	return (
		<ScrollView className="pt-10">
			{/* Image Logo of European  */}
			<View className="flex-1 justify-center items-center">
				<Image
					source={require('../../assets/european_commission_logo.png')}
					className="w-full h-64"
				/>
			</View>

			{/* Action Buttons */}
			<ActionButton
				title="Conectado a red"
				color="#FD8D3C"
				screen="GridTracking"
			/>
			<ActionButton
				title="FV con Seguimiento"
				color="#FD8D3C"
				screen="GridTracking"
			/>
			<ActionButton title="FV Autónomo" color="#FD8D3C" screen="" />
			<ActionButton title="Datos Mensuales" color="#756BB1" screen="" />
			<ActionButton title="Datos Diarios" color="#756BB1" screen="" />
			<ActionButton title="Datos Horarios" color="#756BB1" screen="" />
			<ActionButton title="TMY" color="#31A354" screen="" />
		</ScrollView>
	);
};

export default HomeScreen;
