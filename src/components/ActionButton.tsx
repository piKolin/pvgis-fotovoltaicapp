import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useNavigation } from '@react-navigation/native';

export type Props = {
	title: string;
	color?: string;
	screen: any;
};

export type NavigationProp = NativeStackNavigationProp<
	RootStackParamList,
	'Home'
>;

const ActionButton: React.FC<Props> = ({ title, color, screen }) => {
	const navigation = useNavigation<NavigationProp>();

	return (
		<TouchableOpacity
			onPress={() => navigation.navigate(screen)}
			className="flex m-2 flex-1 justify-center items-center border border-gray-400 py-5 rounded-lg shadow bg-white"
			style={{
				borderLeftColor: color,
				borderLeftWidth: 8,
			}}
		>
			<Text className="text-black text-lg font-bold">{title}</Text>
		</TouchableOpacity>
	);
};

export default ActionButton;
