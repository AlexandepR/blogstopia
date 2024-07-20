import { lazy } from 'react';
import type { LoginFormProps } from './LoginForm';
import type { FC } from 'react';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
    async () => await import('./LoginForm'),
);
