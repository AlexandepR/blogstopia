import { createAsyncThunk } from '@reduxjs/toolkit';
import { COOKIE } from 'shared/const/cookies';
import type { ThunkConfig } from 'app/providers/StoreProvider';
import i18n from 'shared/config/i18n/i18n';

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
    const { extra, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.post(`/auth/login`, authData);

        if (!response.data?.accessToken) {
            return rejectWithValue('Invalid response format');
        }

        document.cookie = `${COOKIE.ACCESS_TOKEN}=${response.data.accessToken}`;
        console.log('[loginByUserName] Response: ', response);
        return response.data;
    } catch (error) {
        console.log('[loginByUserName] Error: ', error);
        return rejectWithValue(i18n.t('Неверный логин или пароль'));
    }
});
