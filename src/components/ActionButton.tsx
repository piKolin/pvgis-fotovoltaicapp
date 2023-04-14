import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

export type Props = {
	title: string;
	color?: string;
	screen: any;
};

const ActionButton = ({ title, color, screen }: Props) => {
	return (
		<TouchableOpacity
			className="flex m-2 flex-1 justify-center items-center border border-gray-400 py-5 rounded bg-white"
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
