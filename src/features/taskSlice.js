import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
	name: 'task',
	initialState: {
		data: [],
		status: idle,
		error: null,
	},
	reducers: {
		addTask: (state, action) => {
			state.data = state.data.push(action.payload);
		},
		removeTask: (state, action) => {
			state.data = state.data.filter(task => task.id === action.payload);
		},
		updateTask: (state, action) => {
			state.data = state.data.map(task => {
				if(task.id === action.payload.id) {
					task = action.payload;
				}
			})
		}
	}
})

export const { addTask, removeTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;