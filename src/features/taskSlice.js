import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
	name: 'task',
	initialState: [],
	status: idle,
	error: null,
	reducers: {
		addTask: (state, action) => {
			alert('Task added from REDUX');
		},
		removeTask: (state, action) => {
			alert('Task removed from REDUX');
		},
		updateTask: (state, action) => {
			alert('Task updated from REDUX');
		}
	}
})

export const { addTask, removeTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;