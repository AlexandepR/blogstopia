import { classNames } from 'shared/lib/classNames/classNames';
import cls from 'widgets/Navbar/ui/Navbar/Navbar.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onShowModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR}
                className={cls.links}
                onClick={onShowModal}
                // eslint-disable-next-line i18next/no-literal-string
            >
                Login
            </Button>
            <Modal
                isOpen={isAuthModal}
                onClose={onShowModal}
                // eslint-disable-next-line i18next/no-literal-string
            > Lorem
            </Modal>
        </div>
    );
});

export default Navbar;
