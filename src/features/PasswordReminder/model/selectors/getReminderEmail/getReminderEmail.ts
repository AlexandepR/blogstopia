import type { StateSchema } from 'app/providers/StoreProvider';

export const getReminderEmail = (state: StateSchema) => {
    return state?.PasswordReminder?.email || '';
};
