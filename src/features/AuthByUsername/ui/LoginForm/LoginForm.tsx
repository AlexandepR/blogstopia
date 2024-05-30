import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './LoginForm.module.scss';
import { Input } from 'shared/ui/Input/Input';
import { classNames } from 'shared/lib/classNames/classNames';

interface LoginFormProps {
    className?: string;
    switchToForgotPassword: () => void;
}

export const LoginForm = ({
    className,
    switchToForgotPassword,
}: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <div>
                <div className={cls.content}>
                    <label>{t('Логин или почта')}</label>
                    <Input autofocus type="text" className={cls.input} />
                    <label>{t('Пароль')}</label>
                    <Input type="password" className={cls.inputPass} />
                </div>
                <div className={cls.btnWrapper}>
                    <Button>{t('Войти')}</Button>
                    <Button
                        className={cls.btnForgot}
                        onClick={switchToForgotPassword}
                    >
                        {t('Восстановить пароль')}
                    </Button>
                </div>
            </div>
        </div>
    );
};
