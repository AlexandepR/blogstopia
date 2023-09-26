import { classNames } from 'src/shared/lib/classNames/classNames';
import cls from 'src/widgets/Navbar/ui/Navbar/Navbar.module.scss';
import { Button, ButtonTheme } from 'src/shared/ui/Button/Button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'src/features/AuthByUsername';
import { useTranslation } from 'react-i18next';
import { Modal } from 'src/shared/ui/Modal/Modal';

interface NavbarProps {
    className?: string;
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
            >
                Login
            </Button>
             <Modal
                isOpen={isAuthModal}
                onClose={onShowModal}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dignissimos dolor et eveniet harum id ipsam libero magnam maxime modi nihil numquam qui quo quod recusandae rerum saepe, suscipit voluptates.
            </Modal>
        </div>
    );
});

export default Navbar;