import React, { useState } from 'react';
import { classNames } from 'src/shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'src/shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'src/shared/ui/ThemeSwitcher';
import cls from 'src/widgets/Sidebar/ui/Sidebar.module.scss';
import LangSwitcher from 'src/shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'src/shared/ui/Button/Button';
import { RoutePath } from 'src/shared/config/routeConfig/routeConfig';


interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };
    // @ts-ignore
    return (
            <div
                data-testid="sidebar"
                className={classNames(cls.Sidebar2, { [cls.collapsed as string]: collapsed }, [className || ''])}>

                <div className={cls.items}>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        to={RoutePath.home}
                        className={cls.mainLink}
                    >
                        Home
                    </AppLink>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        to={RoutePath.blogs}
                        className={cls.link}
                    >
                        Blogs
                    </AppLink>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        to={RoutePath.posts}
                        className={cls.link}
                    >
                        Posts
                    </AppLink>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        to={RoutePath.test}
                        className={cls.link}
                    >
                        Test
                    </AppLink>
                </div>
                <Button
                    className={classNames(cls.collapsedBtn)}
                    data-testid='sidebar-toggle'
                    onClick={onToggle}
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    square={true}
                    size={ButtonSize.L}
                >
                    {collapsed ? ">" : "<"}
                </Button>
                <div className={cls.switchers}>
                    <ThemeSwitcher className={cls.themeSwitch}/>
                    <LangSwitcher className={cls.lang} />
                </div>
            </div>
    );
};

export default Sidebar;
