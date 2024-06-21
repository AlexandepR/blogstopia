import cls from './RegistrationForm.module.scss';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonSize, Hover } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { registrationActions } from '../../model/slice/registrationSlice';
import { getRegistrationState } from '../../model/selectors/getRegistrationState/getRegistrationState';
import { registrationByUsername } from '../../model/services/registrationByUsername/registrationByUsername';
import { ConfirmCodeForm } from 'features/ConfirmByCode/ui/ConfirmCodeForm';
import { RegistrationStep } from 'features/RegistrationByUserName/model/types/registrationSchema';

interface RegistrationFormProps {
    onSend: () => void;
    onConfirm: () => void;
    onClose: () => void;
    className?: string;
}

export const RegistrationForm = memo(
    ({ className, onSend, onClose, onConfirm }: RegistrationFormProps) => {
        const { t } = useTranslation();
        const dispatch = useDispatch<any>();
        const { login, password, email, isLoading, currentStep, error } =
            useSelector(getRegistrationState);

        const onChangeLogin = useCallback(
            (value: string) => {
                dispatch(registrationActions.setUserName(value));
            },
            [dispatch],
        );

        const onChangeEmail = useCallback(
            (value: string) => {
                dispatch(registrationActions.setEmail(value));
            },
            [dispatch],
        );

        const onChangePassword = useCallback(
            (value: string) => {
                dispatch(registrationActions.setPassword(value));
            },
            [dispatch],
        );

        const onRegistrationClick = useCallback(() => {
            dispatch(registrationByUsername({ login, email, password }));
        }, [dispatch, login, email, password]);

        const switchToRegistration = () => {
            dispatch(
                registrationActions.setIsSendConfirmCode(
                    RegistrationStep.Registration,
                ),
            );
        };

        return (
            <div className={classNames(cls.RegistrationForm, {}, [className])}>
                {currentStep === RegistrationStep.Registration && (
                    <div>
                        <div className={cls.content}>
                            <div className={cls.item}>
                                <label>{t('Логин')}</label>
                                <Input
                                    autofocus
                                    type="text"
                                    className={cls.input}
                                    value={login}
                                    onChange={onChangeLogin}
                                />
                            </div>
                            <div className={cls.item}>
                                <label>{t('Почта')}</label>
                                <Input
                                    type="text"
                                    className={cls.input}
                                    value={email}
                                    onChange={onChangeEmail}
                                />
                            </div>
                            <div className={cls.item}>
                                <label>{t('Пароль')}</label>
                                <Input
                                    type="password"
                                    className={cls.inputPass}
                                    value={password}
                                    onChange={onChangePassword}
                                />
                            </div>
                            {error && (
                                <Text
                                    className={cls.error}
                                    theme={TextTheme.ERROR}
                                    title={t('Ошибка')}
                                    text={error}
                                />
                            )}
                        </div>
                        <div className={cls.btnWrapper}>
                            <Button
                                disabled={!!isLoading}
                                size={ButtonSize.ML}
                                onClick={onRegistrationClick}
                            >
                                {t('Регистрация')}
                            </Button>
                            <div className={cls.btnConfirmWrapper}>
                                <Button
                                    onClick={onConfirm}
                                    size={ButtonSize.SM}
                                    hover={Hover.UNDERLINE}
                                >
                                    {t('Введите код')}
                                </Button>
                                <Text size={TextSize.SM} text={t('или')} />
                                <Button
                                    onClick={onSend}
                                    size={ButtonSize.SM}
                                    hover={Hover.UNDERLINE}
                                    className={cls.btnForgot}
                                >
                                    {t('отправить повторно')}
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
                {currentStep === RegistrationStep.Confirm && (
                    <ConfirmCodeForm
                        onBack={switchToRegistration}
                        onClose={onClose}
                    />
                )}
            </div>
        );
    },
);
