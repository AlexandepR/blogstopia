// import { LoginFormProps } from 'src/features/AuthByUsername/ui/LoginForm/LoginForm';
import type { FC } from 'react';
import { lazy } from 'react';
import type { LoginModalProps } from 'features/AuthByUsername/ui/LoginModal/LoginModal';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const LoginFormAsync = lazy <FC<LoginModalProps>>(async () => {
    await new Promise((resolve) => {
        setTimeout(() => { resolve(import('../LoginModal/LoginModal')); }, 1500);
    });
});
