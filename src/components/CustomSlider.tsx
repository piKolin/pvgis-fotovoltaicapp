import { View, Text } from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import { Control, Controller } from 'react-hook-form';

type Props = {
	name: string;
	control: Control | any;
	label: string;
	minimumValue: number;
	maximumValue: number;
	step?: number;
	color?: string;
	rules?: object;
};

const CustomSlider: React.FC<Props> = ({
	name,
	control,
	label,
	minimumValue,
	maximumValue,
	step,
	color,
	rules,
}: Props) => {
	return (
		<View className="p-2">
			<Controller
				name={name}
				control={control}
				rules={rules}
				render={({
					field: { onChange, value },
					fieldState: { error },
				}) => (
					<>
						<Text
							className={`text-sm font-bold ${
								error ? 'text-red-600' : 'text-gray-600'
							}`}
						>
							{label}
						</Text>
						<View className="flex flex-row items-center justify-between">
							<Slider
								style={{ width: '85%' }}
								minimumValue={minimumValue}
								maximumValue={maximumValue}
								step={step}
								value={value}
								onValueChange={onChange}
								minimumTrackTintColor={color}
								thumbTintColor="black"
							></Slider>
							<Text className="text-base font-semibold">
								{value}%
							</Text>
						</View>
					</>
				)}
			/>
		</View>
	);
};

export default CustomSlider;
