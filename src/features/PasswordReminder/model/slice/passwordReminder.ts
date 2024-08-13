import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { PasswordReminder } from 'features/PasswordReminder/model/types/passwordReminderSchema';
import { sendPasswordReminderEmail } from 'features/PasswordReminder/model/services/sendReminderByEmail';

const initialState: PasswordReminder = {
    email: '',
    isLoading: false,
};

export const passwordReminderSlice = createSlice({
    name: 'passwordReminder',
    initialState,
    reducers: {
        setEmail(state, action: PayloadAction<string>) {
            state.email = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(sendPasswordReminderEmail.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(sendPasswordReminderEmail.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(sendPasswordReminderEmail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});
export const { actions: passwordReminderActions } = passwordReminderSlice;
export const { reducer: passwordReminderReducer } = passwordReminderSlice;
