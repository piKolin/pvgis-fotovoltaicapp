import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { Control, Controller } from 'react-hook-form';

type DataType = {
	label: string;
	value: string;
};

type Props = {
	name: string;
	data: Array<DataType>;
	control: Control | any;
	label: string;
	placeholder?: string;
	rules?: object;
	color?: string;
	icon?: (visible?: boolean) => JSX.Element | null | undefined;
};
const CustomDropdown: React.FC<Props> = ({
	name,
	data,
	control,
	label,
	rules,
	placeholder,
	color,
	icon,
}) => {
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
							className={`text-sm font-bold pb-2 ${
								error ? 'text-red-600' : 'text-gray-600'
							}`}
						>
							{label}
						</Text>
						<Dropdown
							style={styles.dropdown}
							placeholderStyle={styles.placeholderStyle}
							selectedTextStyle={styles.selectedTextStyle}
							iconStyle={styles.iconStyle}
							data={data}
							maxHeight={300}
							labelField="label"
							valueField="value"
							placeholder={placeholder}
							value={value}
							onChange={onChange}
							activeColor={`${color ? color + '33' : ''}`}
							renderLeftIcon={icon}
							renderItem={(item) => (
								<View className="p-4 flex-row justify-between items-center">
									<Text className="flex-1 text-sm">
										{item.label}
									</Text>
								</View>
							)}
						/>
						{error && (
							<Text className="text-red-300 text-xs">
								{error?.message}
							</Text>
						)}
					</>
				)}
			/>
		</View>
	);
};

export default CustomDropdown;

const styles = StyleSheet.create({
	dropdown: {
		height: 40,
		backgroundColor: 'white',
		borderRadius: 6,
		padding: 12,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 2,
		elevation: 2,
	},
	placeholderStyle: {
		fontSize: 14,
		color: 'lightgray',
	},
	selectedTextStyle: {
		fontSize: 14,
	},
	iconStyle: {
		width: 24,
		height: 24,
	},
});
