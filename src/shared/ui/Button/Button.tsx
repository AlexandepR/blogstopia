import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { memo } from 'react';
import cls from './Button.module.scss';
import type { ModsType } from 'shared/lib/classNames/classNames';
import { classNames } from 'shared/lib/classNames/classNames';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    XS = 'size_xs',
    S = 'size_s',
    SM = 'size_sm',
    M = 'size_m',
    ML = 'size_ml',
    L = 'size_l',
    XL = 'size_xl',
}

export enum Hover {
    CLEAR = 'hover_clear',
    UNDERLINE = 'hover_underline',
    SHADOWS = 'hover_shadows',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
    tags?: any;
    hover?: Hover;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        square,
        disabled,
        size = ButtonSize.M,
        hover = Hover.CLEAR,
        ...otherProps
    } = props;

    const mods: ModsType = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
        [cls[hover]]: true,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
