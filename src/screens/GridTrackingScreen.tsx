import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { RootStackParamList } from '../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useForm } from 'react-hook-form';
import {
	DATABASES_OPTIONS,
	MOUNTINGPLACE_OPTIONS,
	PV_TECHNOLOGY_OPTIONS,
} from '../utils/constants';
import CustomSlider from '../components/CustomSlider';
import CustomInput from '../components/CustomInput';
import CustomDivider from '../components/CustomDivider';
import CustomDropdown from '../components/CustomDropdown';

export type NavigationProp = NativeStackNavigationProp<
	RootStackParamList,
	'GridTrackingScreen'
>;

type FormData = {
	database: string;
	technology: string;
	peakpower: string;
	losses: number;
	mountingplace: string;
	angle: string; //inclination
	aspect: string; //azimuth
	optimalinclination: boolean; //disable inclination
	optimalangles: boolean; //disable inclination and azimuth
};

const DEFAULT_FORM_VALUES: FormData = {
	database: '',
	technology: 'crystSi',
	peakpower: '1',
	losses: 14,
	mountingplace: 'free',
	angle: '35',
	aspect: '0',
	optimalinclination: false,
	optimalangles: false,
};

const GridTrackingScreen: React.FC = () => {
	const navigation = useNavigation<NavigationProp>();

	const { control, handleSubmit, watch } = useForm<FormData>({
		defaultValues: DEFAULT_FORM_VALUES,
	});

	const disableInclination = watch('optimalinclination');
	const disableInclinationAndAzimuth = watch('optimalangles');

	const onSubmit = (data: FormData) => {
		console.log(data);
	};

	return (
		// Upper Area
		<View className="flex-1 flex-col bg-[#FD8D3C]/[.05]">
			<View className="flex-row justify-between pt-10 bg-[#FD8D3C]">
				<TouchableOpacity
					onPress={navigation.goBack}
					className="flex-row items-center p-4"
				>
					<Ionicons name="arrow-back" size={24} color="black" />
					<Text className="text-lg font-semibold">Volver</Text>
				</TouchableOpacity>
				<Text className="text-lg font-bold p-4 text-white">
					Conectado a red
				</Text>
			</View>
			{/* Form options */}

			<ScrollView className="flex-1 flex-col p-2 space-y-4">
				{/* Database Selector */}
				<CustomDropdown
					label="Base de datos"
					name="database"
					control={control}
					data={DATABASES_OPTIONS}
					placeholder="PVGIS-SARAH2, PVGIS-ERA5, ..."
					color="#FD8D3C"
					icon={() => (
						<AntDesign
							style={{ marginRight: 5 }}
							name="database"
							size={24}
							color="black"
						/>
					)}
				/>

				{/* Technology */}
				<CustomDropdown
					label="Tecnología FV"
					name="technology"
					control={control}
					data={PV_TECHNOLOGY_OPTIONS}
					placeholder="Silicio cristalino, CIS, ..."
					color="#FD8D3C"
					icon={() => (
						<MaterialCommunityIcons
							style={{ marginRight: 5 }}
							name="solar-panel"
							size={24}
							color="black"
						/>
					)}
				/>

				{/* Peak Power */}
				<CustomInput
					label="Potencia Pico"
					name="peakpower"
					control={control}
					placeholder="1 Kwp"
					mode="numeric"
					maxLenght={3}
					icon={() => (
						<SimpleLineIcons
							name="energy"
							size={24}
							color="black"
						/>
					)}
				/>

				{/* Losses */}
				<CustomSlider
					control={control}
					minimumValue={0}
					maximumValue={100}
					step={1}
					name="losses"
					label="Pérdidas"
					color="#FD8D3C"
				/>

				<CustomDivider />

				{/* Mounting Place */}
				<CustomDropdown
					label="Posición de montaje"
					name="mountingplace"
					control={control}
					data={MOUNTINGPLACE_OPTIONS}
					placeholder="Posición libre, Tejado, ..."
					color="#FD8D3C"
				/>

				{/* Angle */}
				<CustomInput
					label="Inclinación"
					name="angle"
					control={control}
					placeholder="35º"
					mode="numeric"
					maxLenght={3}
					icon={() => (
						<MaterialCommunityIcons
							name="angle-acute"
							size={24}
							color={'black'}
						/>
					)}
				/>

				{/* Azimuth */}
				<CustomInput
					label="Azimuth"
					name="aspect"
					control={control}
					placeholder="35º"
					mode="numeric"
					maxLenght={3}
					icon={() => (
						<Ionicons
							name="compass-outline"
							size={24}
							color={'black'}
						/>
					)}
				/>

				<CustomDivider />

				{/* Submit Button */}
				<TouchableOpacity
					onPress={handleSubmit(onSubmit)}
					className="flex m-2 justify-center items-center border border-pink-700 py-3 rounded-lg shadow bg-pink-500"
				>
					<Text className="text-white text-lg font-bold">Buscar</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};

export default GridTrackingScreen;
