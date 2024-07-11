import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, Hover } from 'shared/ui/Button/Button';
import cls from './LoginForm.module.scss';
import { Input, InputType } from 'shared/ui/Input/Input';
import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginByUserName } from 'features/AuthByUsername/model/services/loginByUserName';

interface LoginFormProps {
    className?: string;
    switchToForgotPassword: () => void;
}

export const LoginForm = ({
    className,
    switchToForgotPassword,
}: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch<any>();
    const { loginOrEmail, password, error } = useSelector(getLoginState);

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
        dispatch(loginByUserName({ loginOrEmail, password }));
    }, [dispatch, loginOrEmail, password]);

    return (
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
                        className={cls.inputPass}
                        value={password}
                        onChange={onChangePassword}
                    />
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
    );
};
