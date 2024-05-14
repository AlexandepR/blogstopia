import type { ReducersMapObject } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import type { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { userReducer } from 'entities/User';

export function createReduxStore (initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer
    };

    return configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState
    });
}
