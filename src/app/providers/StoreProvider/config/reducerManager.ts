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
import _ from 'lodash';

export type RootState = ReturnType<ReturnType<typeof createCombinedReducer>>;

function createCombinedReducer(reducers: ReducersMapObject<StateSchema>) {
    return combineReducers(reducers);
}

export function createReducerManager(
    initialReducers: ReducersMapObject<StateSchema>,
): ReducerManager {
    const reducers = { ...initialReducers };
    const copyReducers: any = {};
    let combinedReducer = createCombinedReducer(reducers);

    let keysToRemove: StateSchemaKey[] = [];

    return {
        getReducerMap: () => reducers,
        reduce: (state: RootState, action: UnknownAction): RootState => {
            if (keysToRemove.length > 0) {
                const newState = Object.fromEntries(
                    Object.entries(state).filter(
                        ([key]) =>
                            !keysToRemove.includes(key as StateSchemaKey),
                    ),
                ) as RootState;
                keysToRemove = [];
                return combinedReducer(newState, action);
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
            const newReducers = _.omit(
                reducers,
                key,
            ) as ReducersMapObject<StateSchema>;
            keysToRemove.push(key);
            combinedReducer = createCombinedReducer(newReducers);
        },
    };
}
