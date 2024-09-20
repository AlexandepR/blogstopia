import React, { useCallback, useState } from 'react';
import cls from 'widgets/Sidebar/ui/Sidebar/Sidebar.module.scss';
import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { sidebarItems } from 'widgets/Sidebar/model/items';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const { t } = useTranslation();

    const onToggle = useCallback(() => {
        setCollapsed((prev) => !prev);
    }, []);
    const handleLinkClick = () => {
        setIsActive(true);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className || '',
            ])}
        >
            <div className={cls.items}>
                {sidebarItems.map((item) => {
                    return (
                        <SidebarItem
                            key={item.path}
                            item={item}
                            isActive={isActive}
                            handleClick={handleLinkClick}
                        />
                    );
                })}
            </div>
            <Button
                className={classNames(cls.collapsedBtn)}
                data-testid="sidebar-toggle"
                onClick={onToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
            >
                <span className={classNames(cls.collapsedSign)}>
                    {collapsed ? '>' : '<'}
                </span>
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher className={cls.themeSwitch} />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </div>
    );
};

export default Sidebar;
