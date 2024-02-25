import { classNames } from 'shared/lib/classNames/className';
import cls from 'shared/ui/AppLink/Applink.module.scss';
import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
import type { FC } from 'react';
import React from 'react';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    children: React.ReactNode
    theme: AppLinkTheme
    to: string
    className?: string
    isActive?: boolean
    onClick?: () => void
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, { [cls[theme]]: true }, [className || ''])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export default AppLink;
