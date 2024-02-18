import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import { Suspense } from 'react';
import { LoginFormAsync } from 'features/AuthByUsername/ui/LoginForm/LoginForm.async';

export interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
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
            {/* <Suspense fallback={<Loader />}> */}
            {/*    <LoginFormAsync onSuccess={onClose} /> */}
            {/* </Suspense> */}
        </Modal>
    );
};
