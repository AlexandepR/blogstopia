export interface RegistrationSchema {
    login: string;
    email: string;
    password: string;
    isLoading: boolean;
    currentStep: RegistrationStep;
    error?: string;
}

export enum RegistrationStep {
    Registration = 'registration',
    Confirm = 'confirm',
}
