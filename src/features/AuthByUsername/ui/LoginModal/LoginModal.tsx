import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import cls from './LoginModal.module.scss';
import { useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { PasswordReminder } from '../PasswordReminder/PasswordReminder';
import { RegistrationConfirmForm } from '../RegistrationConfirmForm/RegistrationConfirmForm';
import { RegistrationForm } from 'features/RegistrationByUserName';

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
                    <LoginForm
                        switchToForgotPassword={switchToForgotPassword}
                    />
                )}
                {view === 'register' && (
                    <RegistrationForm onSend={switchToForgotPassword} />
                )}
                {view === 'forgotPassword' && (
                    <PasswordReminder
                        onBack={switchToLogin}
                        onSend={RegistrationConfirm}
                    />
                )}
                {view === 'registerConfirm' && (
                    <RegistrationConfirmForm onBack={switchToForgotPassword} />
                )}
            </div>
        </Modal>
    );
};
