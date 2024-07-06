import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';

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
        const response = await axios.post(`${__API__}/auth/login`, authData);
        if (!response.data) {
            throw new Error();
        }
        console.log('[loginByUserName] Response: ', response);
        return response.data;
    } catch (error) {
        console.log('[loginByUserName] Error: ', error);
        return rejectWithValue('error');
    }
});
