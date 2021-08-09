import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { httpService } from '../services/httpService';

export const fetchFolders = createAsyncThunk(
	'folder/getAllFolders',
	async () => {
		const folders = await httpService('/folders');
		if(folders.data.length > 0) {
			return folders;
		} else {
			alert('Error fetching folders');
		}
	});

export const folderSlice = createSlice({
	name: 'folder',
	initialState: {
		data: [],
		status: 'idle',
		error: null,
	},
	reducers: {
		addFolder: (state, action) => {
			state.data = state.data.concat(action.payload);
		},
		removeFolder: (state, action) => {
			state.data = state.data.filter(folder => folder.id !== action.payload);
		}
	},
	extraReducers: {
		[fetchFolders.pending]: (state) => {
			state.status = 'Loading';
		},
		[fetchFolders.fulfilled]: (state, action) => {
			state.data = state.data.concat(action.payload.data);
			state.status = 'Succeeded';
		},
		[fetchFolders.rejected]: (state) => {
			state.status = 'Failed';
		}
	}
})

export const { addFolder, removeFolder } = folderSlice.actions;

export default folderSlice.reducer;