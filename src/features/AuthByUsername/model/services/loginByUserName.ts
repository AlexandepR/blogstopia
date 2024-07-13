import { createAsyncThunk } from '@reduxjs/toolkit';
import { COOKIE } from 'shared/const/cookies';
import api from 'shared/api/api';

interface LoginResponse {
    accessToken: string;
}

interface LoginByUserNameProps {
    loginOrEmail: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<
    LoginResponse,
    LoginByUserNameProps,
    {
        rejectValue: string;
    }
>('loginByUserName', async (authData, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;

    try {
        const response = await api.post(`${__API__}/auth/login`, authData);
        document.cookie = `${COOKIE.ACCESS_TOKEN}=${response.data.accessToken}`;

        console.log('[loginByUserName] Response: ', response);
        return response.data;
    } catch (error) {
        console.log('[loginByUserName] Error: ', error);
        return rejectWithValue('error');
    }
});
