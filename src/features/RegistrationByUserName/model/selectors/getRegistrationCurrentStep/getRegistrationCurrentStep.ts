import type { StateSchema } from 'app/providers/StoreProvider';

export const getRegistrationCurrentStep = (state: StateSchema) => {
    console.log(state, '---------state-----getRegistrationCurrentStep-----');
    return state?.registrationForm?.currentStep || '';
};
