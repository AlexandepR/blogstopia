import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'shared/config/i18n/i18n';
import type { ThunkConfig } from 'app/providers/StoreProvider';

interface ConfirmCode {
    code: string;
}

export const confirmByCode = createAsyncThunk<
    string,
    ConfirmCode,
    ThunkConfig<string>
>('confirmCode', async ({ code }: ConfirmCode, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
        const response = await extra.api.post(
            `/auth/registration-confirmation`,
            {
                code,
            },
        );
        return response.data;
    } catch (e) {
        return rejectWithValue(i18n.t('Неверный код подтверждения'));
    }
});
