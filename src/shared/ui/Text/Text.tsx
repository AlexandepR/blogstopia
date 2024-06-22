import type { ModsType } from 'shared/lib/classNames/classNames';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export const enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}
export const enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export const enum TextSize {
    XS = 'size_xs',
    S = 'size_s',
    SM = 'size_sm',
    M = 'size_m',
    ML = 'size_ml',
    L = 'size_l',
    XL = 'size_xl',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

export const Text = (props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.CENTER,
        size = TextSize.M,
    } = props;

    const mods: ModsType = {
        [cls[align]]: true,
        [cls[theme]]: true,
        [cls[size]]: true,
    };

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
