import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ConfirmCodeForm.module.scss';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { confirmActions } from '../model/slice/confirmSlice';
import { confirmByCode } from '../model/services/confirmByCode';
import { getConfirmCode } from '../model/selectors/getConfirmCode';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { registrationActions } from 'features/RegistrationByUserName/model/slice/registrationSlice';
import { RegistrationStep } from 'features/RegistrationByUserName/model/types/registrationSchema';

interface RegistrationConfirmFormProps {
    onBack: () => void;
    onClose: () => void;
}

export const ConfirmCodeForm = ({
    onBack,
    onClose,
}: RegistrationConfirmFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch<any>();
    const { code, error, isConfirm } = useSelector(getConfirmCode);

    const onChangeConfirmCode = useCallback(
        (value: string) => {
            dispatch(confirmActions.setConfirmCode(value));
        },
        [dispatch],
    );

    const onConfirmCodeClick = useCallback(() => {
        dispatch(confirmByCode({ code }));
    }, [dispatch, code]);

    const onCloseConfirmForm = useCallback(() => {
        dispatch(confirmActions.setIsConfirm(false));
        dispatch(
            registrationActions.setIsSendConfirmCode(
                RegistrationStep.Registration,
            ),
        );
        onClose();
    }, [dispatch, onClose]);

    return !isConfirm ? (
        <div className={classNames(cls.RegistrationConfirm, {}, [])}>
            <h1 className={cls.header}>{t('Введите код')}</h1>
            <div className={cls.content}>
                <label>{t('Код подтверждения')}</label>
                <Input
                    autofocus
                    type="text"
                    className={cls.input}
                    onChange={onChangeConfirmCode}
                />
                {error && (
                    <Text
                        theme={TextTheme.ERROR}
                        title={t('Ошибка')}
                        text={error}
                    />
                )}
                <div className={cls.btnWrapper}>
                    <Button onClick={onConfirmCodeClick}>
                        {t('Подвердить')}
                    </Button>
                    <Button className={cls.btnCancel} onClick={onBack}>
                        {t('Назад')}
                    </Button>
                </div>
            </div>
        </div>
    ) : (
        <div className={cls.ConfirmationWrapper}>
            <div className={cls.confirmation}>
                <Text title={t('Поздравляем!')} />
                <Text text={t('Код успешно подтвержден')} />
            </div>
            <Button className={cls.btnWrapper} onClick={onCloseConfirmForm}>
                {t('Закрыть')}
            </Button>
        </div>
    );
};
