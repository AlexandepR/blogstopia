import { classNames } from 'src/shared/lib/classNames/classNames';
import { Modal } from 'src/shared/ui/Modal/Modal';
import { Loader } from 'src/shared/ui/Loader/Loader';
import { Suspense } from 'react';
import { LoginFormAsync } from 'src/features/AuthByUsername/ui/LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const { className, isOpen, onClose } = props;
    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            {/*<Suspense fallback={<Loader />}>*/}
            {/*    <LoginFormAsync onSuccess={onClose} />*/}
            {/*</Suspense>*/}
        </Modal>
    );
};