import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import useLocalStorage from '~/hooks/useLocalStorage';
const pinkThemeSlice = createSlice({
    name: 'pinkTheme',
    initialState: false,
    reducers: {
        pinkMode: (state, action: PayloadAction<boolean>) => {
            return (state = action.payload);
        },
    },
});

export const { pinkMode } = pinkThemeSlice.actions;
export default pinkThemeSlice.reducer;
