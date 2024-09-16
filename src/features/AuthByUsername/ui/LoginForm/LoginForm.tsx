import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, Hover } from 'shared/ui/Button/Button';
import cls from './LoginForm.module.scss';
import { Input, InputType } from 'shared/ui/Input/Input';
import { classNames } from 'shared/lib/classNames/classNames';
import React, { useCallback } from 'react';
import { useSelector, useStore } from 'react-redux';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginLoginOrEmail } from '../../model/selectors/getLoginLoginOrEmail/getLoginLoginOrEmail';
import { loginByUserName } from '../../model/services/loginByUserName';
import type { ReduxStoreWithManager } from 'app/providers/StoreProvider/config/StateSchema';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getRegistrationCurrentStep } from 'features/RegistrationByUserName/model/selectors/getRegistrationCurrentStep/getRegistrationCurrentStep';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError/getLoginError';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export interface LoginFormProps {
    className?: string;
    switchToForgotPassword: () => void;
    onClose: () => void;
}

const initialReducers = {
    login: loginReducer,
};

const LoginForm = ({
    className,
    switchToForgotPassword,
    onClose,
}: LoginFormProps) => {
    const { t } = useTranslation();
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();
    const loginOrEmail = useSelector(getLoginLoginOrEmail);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const currentStep = useSelector(getRegistrationCurrentStep);

    const onChangeLogin = useCallback(
        (value: string) => {
            dispatch(loginActions.setLoginOrEmail(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({ loginOrEmail, password })).then((result) => {
            if (result.meta.requestStatus === 'fulfilled') {
                onClose();
            }
        });
    }, [onClose, dispatch, loginOrEmail, password]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <div>
                    <div className={cls.content}>
                        <label>{t('Логин или почта')}</label>
                        <Input
                            autofocus
                            type={InputType.TEXT}
                            className={cls.input}
                            value={loginOrEmail}
                            onChange={onChangeLogin}
                        />
                        <label>{t('Пароль')}</label>
                        <Input
                            type={InputType.PASSWORD}
                            className={cls.input}
                            value={password}
                            onChange={onChangePassword}
                        />
                        {error && (
                            <Text
                                className={cls.error}
                                theme={TextTheme.ERROR}
                                size={TextSize.S}
                                title={t('Ошибка')}
                                text={error}
                            />
                        )}
                    </div>
                    <div className={cls.btnWrapper}>
                        <Button onClick={onLoginClick}>{t('Войти')}</Button>
                        <Button
                            hover={Hover.UNDERLINE}
                            size={ButtonSize.SM}
                            onClick={switchToForgotPassword}
                        >
                            {t('Восстановить пароль')}
                        </Button>
                    </div>
                </div>
            </div>
        </DynamicModuleLoader>
    );
};
export default LoginForm;
