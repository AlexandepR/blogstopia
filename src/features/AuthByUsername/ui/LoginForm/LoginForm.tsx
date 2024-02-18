export interface LoginFormProps {
    className?: string
    onSuccess: () => void
}

export const LoginForm = (props: LoginFormProps) => {
    const { className, onSuccess } = props;
};
