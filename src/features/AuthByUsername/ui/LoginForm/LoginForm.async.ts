import type { LoginFormProps } from './LoginForm';
// import { LoginFormProps } from 'src/features/AuthByUsername/ui/LoginForm/LoginForm';
import type { FC } from 'react';
import { lazy } from 'react';

export const LoginFormAsync = lazy <FC<LoginFormProps>>(async () => await new Promise((resolve) => {
    // @ts-expect-error
    setTimeout(() => { resolve(import('./LoginForm')); }, 1500);
}));
