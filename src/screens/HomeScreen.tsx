import { Image, ScrollView, View, SafeAreaView } from 'react-native';
import React from 'react';
import ActionButton from '../components/ActionButton';
import CustomSpacer from '../components/form/CustomSpacer';

const HomeScreen: React.FC = () => {
	return (
		<View className="flex-1 pt-6">
			<ScrollView>
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
					screen="GridTrackingScreen"
				/>
				<ActionButton
					title="FV con Seguimiento"
					color="#FD8D3C"
					screen="GridTrackingScreen"
				/>
				<ActionButton title="FV Autónomo" color="#FD8D3C" screen="" />
				<ActionButton
					title="Datos Mensuales"
					color="#756BB1"
					screen=""
				/>
				<ActionButton title="Datos Diarios" color="#756BB1" screen="" />
				<ActionButton
					title="Datos Horarios"
					color="#756BB1"
					screen=""
				/>
				<ActionButton title="TMY" color="#31A354" screen="" />
				<CustomSpacer />
			</ScrollView>
		</View>
	);
};

export default HomeScreen;
