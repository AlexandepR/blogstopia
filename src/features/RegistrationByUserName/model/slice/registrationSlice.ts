import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RegistrationSchema } from '../types/registrationSchema';
import { RegistrationStep } from '../types/registrationSchema';
import { registrationByUsername } from '../services/registrationByUsername/registrationByUsername';

const initialState: RegistrationSchema = {
    login: '',
    email: '',
    password: '',
    isLoading: false,
    currentStep: RegistrationStep.Registration,
};

export const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string>) => {
            state.login = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setRegistrationStep: (
            state,
            action: PayloadAction<RegistrationStep>,
        ) => {
            state.currentStep = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registrationByUsername.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(registrationByUsername.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentStep = RegistrationStep.Confirm;
            })
            .addCase(registrationByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.currentStep = RegistrationStep.Registration;
                state.error = action.payload;
            });
    },
});

export const { actions: registrationActions } = registrationSlice;
export const { reducer: registrationReducer } = registrationSlice;
