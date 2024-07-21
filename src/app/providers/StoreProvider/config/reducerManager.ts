import type {
    Reducer,
    ReducersMapObject,
    UnknownAction,
} from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import type {
    ReducerManager,
    StateSchema,
    StateSchemaKey,
} from './StateSchema';

export type RootState = ReturnType<ReturnType<typeof createCombinedReducer>>;

function createCombinedReducer(reducers: ReducersMapObject<StateSchema>) {
    return combineReducers(reducers);
}

export function createReducerManager(
    initialReducers: ReducersMapObject<StateSchema>,
): ReducerManager {
    const reducers = { ...initialReducers };

    let combinedReducer = createCombinedReducer(reducers);

    let keysToRemove: StateSchemaKey[] = [];

    return {
        getReducerMap: () => reducers,
        reduce: (state: RootState, action: UnknownAction): RootState => {
            if (keysToRemove.length > 0) {
                const newState = { ...state } as Partial<StateSchema>;
                keysToRemove.forEach((key) => {
                    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
                    delete newState[key];
                });
                keysToRemove = [];
                return combinedReducer(newState as RootState, action);
            }
            return combinedReducer(state, action);
        },
        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }
            reducers[key] = reducer;

            combinedReducer = createCombinedReducer(reducers);
        },
        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete reducers[key];
            keysToRemove.push(key);
            combinedReducer = createCombinedReducer(reducers);
        },
    };
}
