import { classNames } from 'src/shared/lib/classNames/className';
import 'src/shared/ui/Loader/Loader.scss'

interface LoaderProps {
    className?: string
}

export const Loader = ({className}: LoaderProps) => {
    return (
            <div className={classNames("lds-roller", {}, [className || ''])}>
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
            </div>
    );
};