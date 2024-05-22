import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import React from 'react';
import { Button } from 'shared/ui/Button/Button';
import cls from './PasswordReminder.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface PasswordReminderProps {
    className?: string
    onBack: () => void
    onSend: () => void
    // switchToLogin: () => void
}

export const PasswordReminder = ({ className, onBack, onSend }: PasswordReminderProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.PasswordReminder, {}, [className])}>
            <h1 className={cls.header}>{t('Восстановление пароля')}</h1>
            <div className={cls.content}>
                <label>{t('Почта')}</label>
                <Input
                    autofocus
                    type="text"
                    className={cls.input}
                />
                <div className={cls.btnWrapper}>
                    <Button
                        onClick={onSend}
                    >{t('Отправить')}</Button>
                    <Button
                        className={cls.btnCancel}
                        onClick={onBack}
                    >{t('Назад')}</Button>
                </div>
            </div>
        </div>
    );
};
