import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
// import { Button } from 'src/shared/ui/Button/Button';

// Component for testing
export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation<string>();
    const onThrow = () => { setError(true); };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={onThrow}
        >
            {t('throw error')}
        </Button>
    );
};
