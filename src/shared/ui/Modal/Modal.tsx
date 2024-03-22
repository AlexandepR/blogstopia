import type {
    MutableRefObject,
    ReactNode
} from 'react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import cls from './Modal.module.scss';
import { useTheme } from 'app/providers/ThemeProviders';
import { Portal } from 'shared/ui/Portal/Portal';
import type { ModsType } from 'shared/lib/classNames/classNames';
import { classNames } from 'shared/lib/classNames/classNames';
// import { useTheme } from 'src/app/providers/ThemeProviders';
// import { classNames, ModsType } from 'src/shared/lib/classNames/classNames';
// import { Portal } from 'src/shared/ui/Portal/Portal';

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
    const { theme } = useTheme();

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    // Новые ссылки!!!
    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);
    console.log(isOpen, 'isOpen----1-----');

    const mods: ModsType = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div
                        className={cls.content}
                        onClick={onContentClick}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.  {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
