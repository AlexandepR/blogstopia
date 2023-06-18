import cls from './Button.module.scss';
import { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from 'src/shared/lib/classNames/classNames';

// import { classNames } from '../../lib/classNames/classNames';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ThemeButton.CLEAR,
        ...otherProps
    } = props;
    return (
        <button
            type="button"
            className={classNames(cls.Button, { [cls[theme] as string]: true }, [className || ''])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
