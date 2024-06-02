import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './RegistrationConfirmForm.module.scss';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import React from 'react';

interface RegistrationConfirmFormProps {
    onBack: () => void;
}

export const RegistrationConfirmForm = ({
    onBack,
}: RegistrationConfirmFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.RegistrationConfirm, {}, [])}>
            <h1 className={cls.header}>{t('Введите код')}</h1>
            <div className={cls.content}>
                <label>{t('Код подтверждения')}</label>
                <Input autofocus type="text" className={cls.input} />
                <div className={cls.btnWrapper}>
                    <Button>{t('Подвердить')}</Button>
                    <Button className={cls.btnCancel} onClick={onBack}>
                        {t('Назад')}
                    </Button>
                </div>
            </div>
        </div>
    );
};
