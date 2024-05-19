import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import cls from './LoginModal.module.scss';
import { useState } from 'react';
import { RegistrationForm } from 'features/AuthByUsername/ui/RegistrationForm/RegistrationForm';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

export interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const LoginModal = (props: LoginModalProps) => {
    const [isLoginView, setIsLoginView] = useState(true);
    const { t } = useTranslation();

    const switchToLogin = () => {
        setIsLoginView(true);
    };
    const switchToRegistration = () => {
        setIsLoginView(false);
    };

    const {
        className,
        isOpen,
        onClose
    } = props;
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
                        style={isLoginView ? undefined : { fontWeight: 'bold' }}
                        className={cls.btn}
                        onClick={switchToRegistration}
                    >{t('Войти')}
                    </Button>
                    <Button
                        style={isLoginView ? { fontWeight: 'bold' } : undefined}
                        className={cls.btn}
                        onClick={switchToLogin}
                    >{t('Регистрация')}
                    </Button>
                </div>
                { isLoginView
                    ? <RegistrationForm />
                    : <LoginForm />
                }
            </div>
        </Modal>
    );
};
