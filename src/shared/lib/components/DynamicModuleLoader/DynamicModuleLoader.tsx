import { useStore } from 'react-redux';
import type {
    ReduxStoreWithManager,
    StateSchemaKey,
} from 'app/providers/StoreProvider/config/StateSchema';
import type { FC } from 'react';
import { useEffect } from 'react';
import type { Reducer } from '@reduxjs/toolkit';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
};

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
    children: any;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (
    props: DynamicModuleLoaderProps,
) => {
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();
    const { reducers, children, removeAfterUnmount = true } = props;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            const stateSchemaKey = name as StateSchemaKey;

            store.reducerManager.add(stateSchemaKey, reducer);
            dispatch({ type: `@INIT ${name.toUpperCase()}` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]) => {
                    const stateSchemaKey = name as StateSchemaKey;
                    store.reducerManager.remove(`${stateSchemaKey}`);
                    dispatch({ type: `@REMOVE ${name.toUpperCase()}` });
                });
            }
        };
    }, [dispatch, reducers, removeAfterUnmount, store.reducerManager]);
    return <>{children}</>;
};
