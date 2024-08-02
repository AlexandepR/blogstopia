import type { StateSchema } from 'app/providers/StoreProvider';

export const getLoginLoginOrEmail = (state: StateSchema) =>
    state?.login?.loginOrEmail || '';
