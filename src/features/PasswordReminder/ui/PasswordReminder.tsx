import { useTranslation } from 'react-i18next';
import { Input, InputType } from 'shared/ui/Input/Input';
import React, { useCallback } from 'react';
import { Button } from 'shared/ui/Button/Button';
import cls from './PasswordReminder.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import {
    passwordReminderActions,
    passwordReminderReducer,
} from '../model/slice/passwordReminder';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { sendPasswordReminderEmail } from 'features/PasswordReminder/model/services/sendReminderByEmail';
import { getReminderEmail } from 'features/PasswordReminder/model/selectors/getReminderEmail/getReminderEmail';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export interface PasswordByEmailReminderProps {
    className?: string;
    onBack: () => void;
    onSend: () => void;
}

const initialReducers = {
    PasswordReminder: passwordReminderReducer,
};
const PasswordByEmailReminder = ({
    className,
    onBack,
    onSend,
}: PasswordByEmailReminderProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const email = useSelector(getReminderEmail);

    const onChangeEmail = useCallback(
        (value: string) => {
            dispatch(passwordReminderActions.setEmail(value));
        },
        [dispatch],
    );

    const onReminderClick = useCallback(() => {
        dispatch(sendPasswordReminderEmail({ email }));
        onSend();
    }, [dispatch, email, onSend]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(cls.PasswordReminder, {}, [className])}>
                <h1 className={cls.header}>{t('Восстановление пароля')}</h1>
                <div className={cls.content}>
                    <label>{t('Почта')}</label>
                    <Input
                        autofocus
                        type={InputType.TEXT}
                        className={cls.input}
                        onChange={onChangeEmail}
                    />
                    <div className={cls.btnWrapper}>
                        <Button onClick={onReminderClick}>
                            {t('Отправить')}
                        </Button>
                        <Button className={cls.btnCancel} onClick={onBack}>
                            {t('Назад')}
                        </Button>
                    </div>
                </div>
            </div>
        </DynamicModuleLoader>
    );
};
export default PasswordByEmailReminder;
