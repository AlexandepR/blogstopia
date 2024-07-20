import type { FC } from 'react';
import { lazy } from 'react';
import type { RegistrationConfirmFormProps } from './ConfirmCodeForm';

export const ConfirmCodeFormAsync = lazy<FC<RegistrationConfirmFormProps>>(
    async () => await import('./ConfirmCodeForm'),
);
