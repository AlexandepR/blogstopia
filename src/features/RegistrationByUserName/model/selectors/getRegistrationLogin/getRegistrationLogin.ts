import type { StateSchema } from 'app/providers/StoreProvider';

export const getRegistrationLogin = (state: StateSchema) =>
    state?.registrationForm?.login || '';
