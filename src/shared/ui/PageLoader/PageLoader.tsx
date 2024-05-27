import { Loader } from 'shared/ui/Loader/Loader';
import cls from 'shared/ui/PageLoader/PageLoader.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

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
