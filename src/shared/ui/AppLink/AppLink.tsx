import { classNames } from 'shared/lib/classNames/classNames';
import cls from 'shared/ui/AppLink/Applink.module.scss';
import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
import type { FC } from 'react';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
    isActive?: boolean
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        isActive = false,
        ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={
                classNames(cls.AppLink,
                    { [cls.isActive]: isActive },
                    [className, cls[theme]])
            }
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export default AppLink;
