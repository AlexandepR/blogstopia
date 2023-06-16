import { classNames } from 'src/shared/lib/classNames/className';
import cls from 'src/widgets/Navbar/ui/Navbar/Navbar.module.scss'
import { useState } from 'react';
import AppLink, { AppLinkTheme } from 'src/shared/ui/AppLink/AppLink';

interface SidebarProps {
    className?: string
}

export const Navbar = ({className}: SidebarProps) => {
    return (
        <div className={classNames (cls.navbar, {}, [className || ''])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
                    Главная
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};

export default Navbar;