import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import httpService from '../services/httpService';

export const fetchTasks = createAsyncThunk(
	'task/getAllTasks',
	async () => {
		const tasks = await httpService('/tasks');
		if(tasks.data.length > 0) {
			return tasks;
		} else {
			alert('Error fetching tasks');
		}
	})

export const taskSlice = createSlice({
	name: 'task',
	initialState: {
		data: [],
		status: 'idle',
		error: null,
	},
	reducers: {
		addTask: (state, action) => {
			state.data = state.data.concat(action.payload);
		},
		removeTask: (state, action) => {
			state.data = state.data.filter(task => task.id !== action.payload);
		},
		updateTask: (state, action) => {
			const index = state.data.findIndex(
				task => task.id === action.payload.id
			)			
			state.data = state.data.filter(task => task.id !== action.payload.id);
			state.data.splice(index, 0, action.payload);
		}
	},
	extraReducers: {
		[fetchTasks.pending]: (state) => {
			state.status = 'Loading';
		},
		[fetchTasks.fulfilled]: (state, action) => {
			state.data = action.payload.data;
			state.status = 'Succeeded';
		},
		[fetchTasks.rejected]: (state) => {
			state.status = 'Failed';
		}
	}
})

export const { addTask, removeTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;