import { configureStore } from '@reduxjs/toolkit';
import pinkTheme from './Slices/Theme.slice';

const store = configureStore({
    reducer: { theme: pinkTheme },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
