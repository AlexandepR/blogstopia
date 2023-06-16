import { classNames } from 'src/shared/lib/classNames/className';
import cls from 'src/shared/ui/LangSwitcher/LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import React from 'react';
import Button, { ThemeButton } from 'src/shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };

    return (
            <Button
                className={classNames(cls.LangSwitcher, {}, [className || ''])}
                theme={ThemeButton.CLEAR}
                onClick={toggle}
            >
                {t('Язык')}
            </Button>
    );
};

export default LangSwitcher;