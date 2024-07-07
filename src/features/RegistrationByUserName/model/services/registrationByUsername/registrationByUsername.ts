import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import i18n from 'shared/config/i18n/i18n';

interface RegistrationByUsernameProps {
    login: string;
    email: string;
    password: string;
}

// type RegistrationResponseStatus = 'NO_CONTENT' | 'BAD_REQUEST';
type RegistrationResponseStatus = string;

export const registrationByUsername = createAsyncThunk<
    string,
    RegistrationByUsernameProps,
    {
        rejectValue: string;
    }
>(
    'registrationByUsername',
    async (
        { login, email, password }: RegistrationByUsernameProps,
        thunkAPI,
    ) => {
        try {
            const response = await axios.post(`${__API__}/auth/registration`, {
                login,
                email,
                password,
            });
            console.log('[registrationByUsername] Response: ', response);
            return response.data;
        } catch (error) {
            console.log('[registrationByUsername] Error: ', error);
            return thunkAPI.rejectWithValue(
                i18n.t('Логин или Почта уже существует'),
            );
        }
    },
);
