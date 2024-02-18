// import { classNames } from 'src/shared/lib/classNames/classNames';
import { classNames } from 'shared/lib/classNames/classNames';
// import { Loader } from 'src/shared/ui/Loader/Loader';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from 'shared/ui/PageLoader/PageLoader.module.scss';

interface PageLoaderProps {
    className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => {
    return (
        <div className={classNames(cls.PageLoader, {}, [className || ''])}>
            <Loader />
        </div>
    );
};
