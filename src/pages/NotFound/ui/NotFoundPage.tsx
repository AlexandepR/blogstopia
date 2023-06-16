import { classNames } from 'src/shared/lib/classNames/className';
import cls from 'src/pages/NotFound/ui/NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next';

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = ({className}: NotFoundPageProps) => {
    const {t} = useTranslation()
    return (
            <div className={classNames(cls.NotFoundPage, {}, [className || ''])}>
                {t('Страница не найдена')}
            </div>
    );
};