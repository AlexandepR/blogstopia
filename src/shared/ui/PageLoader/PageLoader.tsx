import { classNames } from 'src/shared/lib/classNames/className';
import { Loader } from 'src/shared/ui/Loader/Loader';
import cls from 'src/shared/ui/PageLoader/PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
    return (
        <div className={classNames(cls.PageLoader, {}, [className || ''])}>
            <Loader />
        </div>
    );
};
