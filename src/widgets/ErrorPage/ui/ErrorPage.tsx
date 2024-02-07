import { classNames } from 'shared/lib/classNames/classNames';
// import { classNames } from 'src/shared/lib/classNames/classNames';
import cls from 'widgets/ErrorPage/ui/ErrorPage.module.scss';
// import cls from 'src/ErrorPage.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
// import { Button } from 'src/shared/ui/Button/Button';

interface ErrorPageProps {
    className?: string
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation<string>();
    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(cls.ErrorPage, {}, [className || ''])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button
                onClick={reloadPage}
            >
                {t('обновить страницу')}
            </Button>
        </div>
    );
};
