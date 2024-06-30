import type { ConfirmCodeSchema } from '../types/confirmSchema';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { confirmByCode } from '../services/confirmByCode';

const initialState: ConfirmCodeSchema = {
    code: '',
    isConfirm: false,
    isLoading: false,
};

const confirmCodeSlice = createSlice({
    name: 'confirmCode',
    initialState,
    reducers: {
        setConfirmCode: (state, action: PayloadAction<string>) => {
            state.code = action.payload;
        },
        setIsConfirm: (state, action: PayloadAction<boolean>) => {
            state.isConfirm = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(confirmByCode.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(confirmByCode.fulfilled, (state) => {
                state.isLoading = false;
                state.isConfirm = true;
            })
            .addCase(confirmByCode.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: confirmActions } = confirmCodeSlice;
export const { reducer: confirmCodeReducer } = confirmCodeSlice;
