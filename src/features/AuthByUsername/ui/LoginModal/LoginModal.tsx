import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './LoginModal.module.scss';
import { Suspense, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginFormAsync } from 'features/AuthByUsername/ui/LoginForm/LoginFormAsync';
import { ConfirmCodeFormAsync } from 'features/ConfirmByCode/ui/ConfirmCodeFormAsync';
import { PasswordByEmailReminderFormAsync } from 'features/PasswordReminder/ui/PasswordReminderAsync';
import { RegistrationFormAsync } from 'features/RegistrationByUserName/ui/RegistrationForm/RegistrationFormAsync';
import { Loader } from 'shared/ui/Loader/Loader';

export interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

type ViewType = 'login' | 'register' | 'registerConfirm' | 'forgotPassword';

export const LoginModal = (props: LoginModalProps) => {
    const [view, setView] = useState<ViewType>('login');
    const { t } = useTranslation();
    const { className, isOpen, onClose } = props;

    const switchToLogin = () => {
        setView('login');
    };
    const switchToRegistration = () => {
        setView('register');
    };
    const switchToForgotPassword = () => {
        setView('forgotPassword');
    };
    const RegistrationConfirm = () => {
        setView('registerConfirm');
    };

    return (
        <Modal
            className={classNames(cls.LoginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <div>
                <div className={cls.btnWrapper}>
                    <Button
                        style={
                            view === 'login'
                                ? { fontWeight: 'bold' }
                                : undefined
                        }
                        className={cls.btn}
                        onClick={switchToLogin}
                    >
                        {t('Войти')}
                    </Button>
                    <Button
                        style={
                            view === 'register'
                                ? { fontWeight: 'bold' }
                                : undefined
                        }
                        className={cls.btn}
                        onClick={switchToRegistration}
                    >
                        {t('Регистрация')}
                    </Button>
                </div>
                {view === 'login' && (
                    <Suspense fallback={<Loader />}>
                        <LoginFormAsync
                            switchToForgotPassword={switchToForgotPassword}
                            onClose={onClose}
                        />
                    </Suspense>
                )}
                {view === 'register' && (
                    <Suspense fallback={<Loader />}>
                        <RegistrationFormAsync
                            onSend={switchToForgotPassword}
                            onConfirm={RegistrationConfirm}
                            onClose={onClose}
                        />
                    </Suspense>
                )}
                {view === 'forgotPassword' && (
                    <Suspense fallback={<Loader />}>
                        <PasswordByEmailReminderFormAsync
                            onBack={switchToLogin}
                            onSend={RegistrationConfirm}
                        />
                    </Suspense>
                )}
                {view === 'registerConfirm' && (
                    <Suspense fallback={<Loader />}>
                        <ConfirmCodeFormAsync
                            onBack={switchToLogin}
                            onClose={onClose}
                        />
                    </Suspense>
                )}
            </div>
        </Modal>
    );
};
