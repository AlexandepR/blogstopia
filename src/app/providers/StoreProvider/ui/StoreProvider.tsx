import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import type { StateSchema } from 'app/providers/StoreProvider';

interface StoreProviderProps {
    children?: ReactNode
    initialState?: Partial<StateSchema>
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
    const store = createReduxStore();

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
