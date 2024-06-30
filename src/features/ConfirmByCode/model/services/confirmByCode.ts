import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import i18n from 'shared/config/i18n/i18n';

type ConfirmResponseStatus = string;
interface ConfirmCode {
    code: string;
}

export const confirmByCode = createAsyncThunk<
    string,
    ConfirmCode,
    { rejectValue: string }
>('confirmCode', async ({ code }: ConfirmCode, thunkAPI) => {
    try {
        console.log('-----', code, '--------code-----');
        const response = await axios.post(
            `${__API__}/auth/registration-confirmation`,
            {
                code,
            },
        );
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(i18n.t('Неверный код подтверждения'));
    }
});
