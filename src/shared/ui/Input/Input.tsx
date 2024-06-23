import type { InputHTMLAttributes } from 'react';
import React, {
    useLayoutEffect,
    useRef,
    useEffect,
    useState,
    memo,
} from 'react';
import cls from './Input.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;

export interface InputProps extends HTMLInputProps {
    className?: string;
    autofocus?: boolean;
    placeholder?: string;
    value?: string;
    type?: string;
    onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        autofocus,
        placeholder,
        value,
        type = 'text',
        onChange,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const measureTextWidth = (text: string) => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (context) {
            context.font = getComputedStyle(ref.current!).font; // Get font for input
            return context.measureText(text).width;
        }
        return 0;
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onFocus = () => {
        setIsFocused(true);
    };
    const onBlur = () => {
        setIsFocused(false);
    };
    const onSelect = (e: React.SyntheticEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        const textBeforeCaret = target.value.substring(
            0,
            target.selectionStart ?? 0,
        );
        requestAnimationFrame(() => {
            setCaretPosition(measureTextWidth(textBeforeCaret));
        });
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onSelect={onSelect}
                    className={classNames(cls.input)}
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                    {...otherProps}
                />
                {isFocused && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition}px` }}
                    />
                )}
            </div>
        </div>
    );
});
