import cls from './Button.module.scss';
import { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from 'src/shared/lib/classNames/classNames';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
}
export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ButtonTheme.CLEAR,
        square,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme] as string]: true,
        [cls.square as string]: square || false
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className || ''])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
