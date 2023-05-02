import { View, InputModeOptions, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomInput from './CustomInput';
import { Control } from 'react-hook-form';
import { MaterialIcons } from '@expo/vector-icons';

type Props = {
	nameLat: string;
	nameLon: string;
	control: Control | any;
	mode?: InputModeOptions;
	maxLenght?: number;
	placeholder?: string;
	editable?: boolean;
	rules?: object;
	icon?: React.ReactNode;
	callback?: () => void;
};

const CustomLocationInput: React.FC<Props> = ({
	nameLat,
	nameLon,
	control,
	mode,
	maxLenght,
	placeholder,
	editable,
	rules,
	icon,
	callback,
}) => {
	return (
		<View className="flex-row items-center">
			<View className="flex-1">
				<CustomInput
					name={nameLat}
					control={control}
					label="Latitud"
					mode={mode}
					maxLenght={maxLenght}
					placeholder={placeholder}
					editable={editable}
					rules={rules}
					icon={icon}
				/>
			</View>
			<View className="flex-1">
				<CustomInput
					name={nameLon}
					control={control}
					mode={mode}
					label="Longitud"
					maxLenght={maxLenght}
					placeholder={placeholder}
					editable={editable}
					rules={rules}
					icon={icon}
				/>
			</View>
			{!editable && (
				<TouchableOpacity className="pt-6" onPress={callback}>
					<MaterialIcons
						name="edit-location"
						size={40}
						color="gray"
					/>
				</TouchableOpacity>
			)}
		</View>
	);
};

export default CustomLocationInput;
