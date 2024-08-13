import type { StateSchema } from 'app/providers/StoreProvider';

export const getRegistrationCurrentStep = (state: StateSchema) => {
    return state?.registrationForm?.currentStep || '';
};
