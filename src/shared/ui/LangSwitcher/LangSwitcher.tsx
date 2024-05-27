import cls from 'shared/ui/LangSwitcher/LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';

interface LangSwitcherProps {
    className?: string;
    short: boolean;
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const [visibleIndex, setVisible] = useState(short ? 0 : 1);

    useEffect(() => {
        setVisible(short ? 0 : 1);
    }, [short]);

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className || ''])}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
        >
            <span
                className={classNames(
                    cls.animatedText,
                    { [cls.visibleShort]: short },
                    [className || ''],
                )}
            >
                {t('Короткий язык')}
            </span>
            <span
                className={classNames(
                    cls.animatedText,
                    { [cls.visibleShort]: !short },
                    [className || ''],
                )}
            >
                {t('Язык')}
            </span>
        </Button>
    );
};

export default LangSwitcher;
