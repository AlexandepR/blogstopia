import type { FC } from 'react';
import { lazy } from 'react';
import type { RegistrationFormProps } from 'features/RegistrationByUserName/ui/RegistrationForm/RegistrationForm';

export const RegistrationFormAsync = lazy<FC<RegistrationFormProps>>(
    async () => await import('./RegistrationForm'),
);
