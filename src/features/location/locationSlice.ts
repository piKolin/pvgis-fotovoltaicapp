import { createSlice } from '@reduxjs/toolkit';

type Location = { latitude: number; longitude: number };

type LocationState = {
	location: Location | null;
	permission: boolean | null;
	editMode: boolean;
};

const initialState = {
	location: null,
	permission: null,
	editMode: false,
} as LocationState;

export const locationSlice = createSlice({
	name: 'location',
	initialState,
	reducers: {
		setLocation: (state, action) => {
			state.location = action.payload;
		},
		setLocationPermission: (state, action) => {
			state.permission = action.payload;
		},
		setEditMode: (state, action) => {
			state.editMode = action.payload;
		},
	},
});

export const { setLocation, setLocationPermission, setEditMode } =
	locationSlice.actions;

export default locationSlice.reducer;
