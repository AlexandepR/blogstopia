import cls from './RegistrationForm.module.scss';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

interface RegistrationFormProps {
    className?: string
    onSend: () => void
}

export const RegistrationForm = ({ className, onSend }: RegistrationFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.RegistrationForm, {}, [className])}>
            <div>
                <div className={cls.content}>
                    <div
                        className={cls.item}
                    >
                        <label
                        >{t('Логин')}</label>
                        <Input
                            autofocus
                            type="text"
                            className={cls.input}
                        />
                    </div>
                    <div
                        className={cls.item}
                    >
                        <label>{t('Почта')}</label>
                        <Input
                            type="text"
                            className={cls.input}
                        /></div>

                    <div
                        className={cls.item}
                    >
                        <label>{t('Пароль')}</label>
                        <Input
                            type="password"
                            className={cls.inputPass}
                        />
                    </div>
                </div>
                <div className={cls.btnWrapper}>
                    <Button>
                        {t('Регистрация')}
                    </Button>
                    <Button
                        onClick={onSend}
                        className={cls.btnForgot}
                    >{t('Выслать код повторно?')}
                    </Button>
                </div>
            </div>
        </div>
    );
};
