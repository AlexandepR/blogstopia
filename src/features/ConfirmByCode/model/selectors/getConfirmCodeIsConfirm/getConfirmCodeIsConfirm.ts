import type { StateSchema } from 'app/providers/StoreProvider';

export const getConfirmCodeIsConfirm = (state: StateSchema) =>
    state?.confirmCode?.isConfirm || false;
