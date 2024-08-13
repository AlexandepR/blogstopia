import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import i18n from 'shared/config/i18n/i18n';

interface SendReminderByEmailProps {
    email: string;
}

export const sendPasswordReminderEmail = createAsyncThunk<
    undefined,
    SendReminderByEmailProps,
    {
        rejectValue: string;
    }
>(
    'sendPasswordReminderEmail',
    async ({ email }: SendReminderByEmailProps, thunkAPI) => {
        try {
            const response = await axios.post(
                `${__API__}/auth/password-recovery`,
                {
                    email,
                },
            );
            console.log('[sendPasswordReminderEmail] Response: ', response);
        } catch (error) {
            console.log('[sendPasswordReminderEmail] Error: ', error);
            return thunkAPI.rejectWithValue(
                i18n.t('Не получилось отправить письмо'),
            );
        }
    },
);
