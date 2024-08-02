import type { StateSchema } from 'app/providers/StoreProvider';

export const getConfirmCodeError = (state: StateSchema) =>
    state?.confirmCode?.error;
