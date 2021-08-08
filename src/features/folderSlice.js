import { createSlice } from '@reduxjs/toolkit';

export const folderSlice = createSlice({
	name: 'folder',
	initialState: {
		data: [],
		status: idle,
		error: null,
	},
	reducers: {
		addFolder: (state, action) => {
			alert('Created folder from REDUX');
		},
		removerFolder: (state, action) => {
			alert('Removed folder from REDUX');
		}
	}
})

export const { addFolder, removerFolder } = folderSlice.actions;

export default folderSlice.reducer;