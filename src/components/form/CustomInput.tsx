import { View, Text, TextInput, InputModeOptions } from 'react-native';
import React from 'react';
import { Control, Controller } from 'react-hook-form';

type Props = {
	name: string;
	control: Control | any;
	label?: string;
	mode?: InputModeOptions;
	maxLenght?: number;
	placeholder?: string;
	editable?: boolean;
	rules?: object;
	icon?: React.ReactNode;
};

const CustomInput: React.FC<Props> = ({
	name,
	control,
	label,
	mode,
	maxLenght,
	placeholder,
	editable = true,
	rules,
	icon,
}) => {
	return (
		<View className="p-2">
			<Controller
				name={name}
				control={control}
				rules={rules}
				render={({
					field: { onChange, onBlur, value },
					fieldState: { error },
				}) => (
					<>
						{label && (
							<Text
								className={`text-sm font-bold pb-2 ${
									error ? 'text-red-600' : 'text-gray-600'
								}`}
							>
								{label}
							</Text>
						)}
						<View
							className={`${icon ? 'flex-row items-center' : ''}`}
						>
							<TextInput
								className={`flex-1 p-3 border rounded-md ${
									error ? 'border-red-300' : 'border-gray-300'
								} ${
									editable
										? 'bg-white text-black'
										: 'bg-gray-300 text-gray-500'
								} shadow`}
								value={value}
								onChangeText={onChange}
								onBlur={onBlur}
								placeholder={placeholder}
								editable={editable}
								inputMode={mode}
								defaultValue={value}
								maxLength={maxLenght}
							/>
							{icon && (
								<View className="absolute right-2">{icon}</View>
							)}
						</View>

						{error?.message && (
							<Text className="text-red-400 text-xs pt-1">
								{error?.message}
							</Text>
						)}
					</>
				)}
			/>
		</View>
	);
};

export default CustomInput;
