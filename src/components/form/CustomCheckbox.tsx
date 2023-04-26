import { View, Text } from 'react-native';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

type Props = {
	name: string;
	control: Control | any;
	color?: string;
	label?: string;
	text?: string;
	disableText?: boolean;
	rules?: object;
	icon?: React.ReactNode;
};

const CustomOptimizedInput: React.FC<Props> = ({
	name,
	control,
	color,
	label,
	text,
	disableText,
	rules,
	icon,
}) => {
	return (
		<View className="p-2">
			<Controller
				name={name}
				control={control}
				rules={rules}
				render={({ field: { onChange, value } }) => (
					<>
						{label && (
							<Text className="text-sm font-bold pb-2 'text-gray-600">
								{label}
							</Text>
						)}
						<View className="flex-1 flex-row items-center justify-between">
							<View className="px-4">
								<BouncyCheckbox
									size={24}
									text={text}
									isChecked={value}
									disableBuiltInState
									disableText={disableText}
									fillColor={color}
									unfillColor="#FFFFFF"
									innerIconStyle={{ borderWidth: 2 }}
									textStyle={{
										textDecorationLine: 'none',
										fontSize: 15,
									}}
									onPress={() => {
										onChange(!value);
									}}
									iconComponent={icon}
								/>
							</View>
						</View>
					</>
				)}
			/>
		</View>
	);
};

export default CustomOptimizedInput;
