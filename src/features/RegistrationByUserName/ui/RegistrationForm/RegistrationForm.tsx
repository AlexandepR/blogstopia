import cls from './RegistrationForm.module.scss';
import { Input, InputType } from 'shared/ui/Input/Input';
import { Button, ButtonSize, Hover } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { useSelector, useStore } from 'react-redux';
import { memo, useCallback, useEffect } from 'react';
import {
    registrationActions,
    registrationReducer,
} from '../../model/slice/registrationSlice';
import { registrationByUsername } from '../../model/services/registrationByUsername/registrationByUsername';
import { RegistrationStep } from 'features/RegistrationByUserName/model/types/registrationSchema';
import { ConfirmCodeFormAsync } from 'features/ConfirmByCode/ui/ConfirmCodeFormAsync';
import { getRegistrationLogin } from '../../model/selectors/getRegistrationLogin/getRegistrationLogin';
import { getRegistrationPassword } from '../../model/selectors/getRegistrationPassword/getRegistrationPassword';
import { getRegistrationEmail } from '../../model/selectors/getRegistrationEmail/getRegistrationEmail';
import { getRegistrationIsLoading } from '../../model/selectors/getRegistrationIsLoading/getRegistrationIsLoading';
import { getRegistrationCurrentStep } from '../../model/selectors/getRegistrationCurrentStep/getRegistrationCurrentStep';
import { getRegistrationError } from '../../model/selectors/getRegistrationError/getRegistrationError';
import type { ReduxStoreWithManager } from 'app/providers/StoreProvider/config/StateSchema';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export interface RegistrationFormProps {
    onSend: () => void;
    onConfirm: () => void;
    onClose: () => void;
    className?: string;
}

const initialReducers = {
    registrationForm: registrationReducer,
};

const RegistrationForm = memo(
    ({ className, onSend, onClose, onConfirm }: RegistrationFormProps) => {
        const { t } = useTranslation();
        const dispatch = useAppDispatch();
        const store = useStore() as ReduxStoreWithManager;
        const login = useSelector(getRegistrationLogin);
        const password = useSelector(getRegistrationPassword);
        const email = useSelector(getRegistrationEmail);
        const isLoading = useSelector(getRegistrationIsLoading);
        const currentStep = useSelector(getRegistrationCurrentStep);
        const error = useSelector(getRegistrationError);

        useEffect(() => {
            store.reducerManager.add('registrationForm', registrationReducer);
            dispatch({ type: '@INIT REGISTRATION' });

            return () => {
                store.reducerManager.remove('registrationForm');
            };
        }, [dispatch, store.reducerManager]);

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
                registrationActions.setRegistrationStep(
                    RegistrationStep.Registration,
                ),
            );
        };

        return (
            <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
                <div
                    className={classNames(cls.RegistrationForm, {}, [
                        className,
                    ])}
                >
                    {currentStep === RegistrationStep.Registration && (
                        <div>
                            <div className={cls.content}>
                                <div className={cls.item}>
                                    <label>{t('Логин')}</label>
                                    <Input
                                        autofocus
                                        type={InputType.TEXT}
                                        className={cls.input}
                                        value={login}
                                        onChange={onChangeLogin}
                                    />
                                    <label>{t('Почта')}</label>
                                    <Input
                                        type={InputType.TEXT}
                                        className={cls.input}
                                        value={email}
                                        onChange={onChangeEmail}
                                    />
                                    <label>{t('Пароль')}</label>
                                    <Input
                                        type={InputType.PASSWORD}
                                        className={cls.input}
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
                        <ConfirmCodeFormAsync
                            onBack={switchToRegistration}
                            onClose={onClose}
                        />
                    )}
                </div>
            </DynamicModuleLoader>
        );
    },
);
export default RegistrationForm;
