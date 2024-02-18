import React, { useState } from 'react';
import cls from 'widgets/Sidebar/ui/Sidebar.module.scss';
import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const { t } = useTranslation('');

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };
    const handleLinkClick = () => {
        setIsActive(true);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className || ''])}>

            <div className={cls.items}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.home}
                    className={cls.mainLink}
                    isActive={isActive}
                    onClick={handleLinkClick}
                >
                    {t('Главная страница')}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.blogs}
                    className={cls.link}
                    isActive={isActive}
                    onClick={handleLinkClick}
                >
                    {t('Блоги')}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.posts}
                    className={cls.link}
                >
                    {t('Посты')}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.test}
                    className={cls.link}
                >
                    {t('Тест')}
                </AppLink>
            </div>
            <Button
                className={classNames(cls.collapsedBtn)}
                data-testid='sidebar-toggle'
                onClick={onToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                // square={true}
                size={ButtonSize.L}
            >
                <span
                    className={classNames(cls.collapsedSign)}
                >{collapsed ? '>' : '<'}</span>
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher className={cls.themeSwitch}/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};

export default Sidebar;
