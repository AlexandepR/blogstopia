import { classNames } from 'shared/lib/classNames/classNames';
import cls from 'pages/NotFound/ui/NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation<string>();
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className || ''])}>
            {t('Страница не найдена')}
        </div>
    );
};
