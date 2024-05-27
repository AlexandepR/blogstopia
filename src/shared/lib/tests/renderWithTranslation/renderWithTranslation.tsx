import type { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router';
import type { StateSchema } from 'app/providers/StoreProvider';
import { StoreProvider } from 'app/providers/StoreProvider';

export interface componentRenderOptions {
    route?: string;
    initialState?: Partial<StateSchema>;
}

export function renderWithTranslation(component: ReactNode) {
    return render(
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>,
    );
}
