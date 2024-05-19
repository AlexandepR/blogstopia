import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/className';
import { Button } from 'shared/ui/Button/Button';
import cls from './LoginForm.module.scss';
import { Input } from 'shared/ui/Input/Input';
import { useState } from 'react';

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const [forgotPass, setForgotPass] = useState(false);

    const onForgotPassword = () => {
        setForgotPass(true);
    };

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            {forgotPass
                ? <div>
                    <div className={cls.content}>
                        <label>{t('Почта')}</label>
                        <Input
                            autofocus
                            type="text"
                            className={cls.input}
                        />
                    </div>
                    <div className={cls.btnWrapper}>
                        <Button
                        >{t('Отправить')}
                        </Button>
                        <Button
                            className={cls.btnCancel}
                            onClick={() => { setForgotPass(false); }}
                        >{t('Назад')}
                        </Button>
                    </div>
                </div>
                : <div>
                    <div className={cls.content}>
                        <label>{t('Логин или почта')}</label>
                        <Input
                            autofocus
                            type="text"
                            className={cls.input}
                        />
                        <label>{t('Пароль')}</label>
                        <Input
                            type="password"
                            className={cls.inputPass}
                        />
                    </div>
                    <div className={cls.btnWrapper}>
                        <Button>
                            {t('Войти')}
                        </Button>
                        <Button
                            className={cls.btnForgot}
                            onClick={onForgotPassword}
                        >{t('Восстановить пароль')}
                        </Button>
                    </div>
                </div>
            }

        </div>
    );
};
