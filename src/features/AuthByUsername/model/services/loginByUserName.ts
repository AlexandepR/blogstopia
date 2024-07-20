import { createAsyncThunk } from '@reduxjs/toolkit';
import { COOKIE } from 'shared/const/cookies';
import type { ThunkConfig } from 'app/providers/StoreProvider';

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
    ThunkConfig<string>
>('loginByUserName', async (authData, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;

    try {
        console.log(authData, '---------------------authData------------');
        const response = await extra.api.post(`/auth/login`, authData);
        console.log(response, '---------------------RESPONSE-------------');

        if (!response.data?.accessToken) {
            throw new Error('Invalid response format');
        }

        document.cookie = `${COOKIE.ACCESS_TOKEN}=${response.data.accessToken}`;

        console.log('[loginByUserName] Response: ', response);
        return response.data;
    } catch (error) {
        console.log('[loginByUserName] Error: ', error);
        return rejectWithValue('error');
    }
});
