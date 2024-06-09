import type { StateSchema } from 'app/providers/StoreProvider';

export const getConfirmCode = (state: StateSchema) => state?.confirmCode;
