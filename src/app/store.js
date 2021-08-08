import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/taskSlice';
import folderReducer from '../features/folderSlice';

export const store = configureStore({
  reducer: {
    task: taskReducer,
    folder: folderReducer, 
  },
})