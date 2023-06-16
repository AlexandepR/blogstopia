import React, { useState } from 'react';
import { classNames } from 'src/shared/lib/classNames/className';
import AppLink, { AppLinkTheme } from 'src/shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'src/shared/ui/ThemeSwitcher';
import cls from 'src/widgets/Sidebar/ui/Sidebar.module.scss';
import LangSwitcher from 'src/shared/ui/LangSwitcher/LangSwitcher';


interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div>
            <div className={classNames(cls.Sidebar, {[cls.collapsed as string]: collapsed}, [className || ''])}>

                <div className={cls.links}>
                    <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
                        Home</AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to="/blogs">
                        Blogs</AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to="/posts">
                        Posts</AppLink>
                </div>
                <button onClick={onToggle}>toogle</button>
                <div className={cls.switchers}>
                    <ThemeSwitcher />
                    <LangSwitcher className={cls.lang}/>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
