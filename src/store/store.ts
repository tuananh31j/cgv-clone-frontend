import { configureStore } from '@reduxjs/toolkit';
import pinkTheme from './Slices/ThemeSlice';
import { useDispatch } from 'react-redux';
import auth from './Slices/AuthSlice';

const store = configureStore({
    reducer: { theme: pinkTheme, auth: auth },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
