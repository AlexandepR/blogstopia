import type { UserSchema } from 'entities/User';
import type { RegistrationSchema } from 'features/RegistrationByUserName';
import type { ConfirmCodeSchema } from 'features/ConfirmByCode/model/types/confirmSchema';
import type { LoginSchema } from 'features/AuthByUsername';
import type { AxiosInstance } from 'axios';
import type {
    EnhancedStore,
    Reducer,
    ReducersMapObject,
    UnknownAction,
} from '@reduxjs/toolkit';
import type { RootState } from './reducerManager';
import type { PasswordReminder } from 'features/PasswordReminder/model/types/passwordReminderSchema';

export interface StateSchema {
    user: UserSchema;

    // Async reducers
    registrationForm?: RegistrationSchema;
    confirmCode?: ConfirmCodeSchema;
    login?: LoginSchema;
    PasswordReminder?: PasswordReminder;
}

export type StateSchemaKey = keyof StateSchema;

export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}

export type OnlyOptionalKeys<State> = keyof {
    [K in keyof State as [undefined] extends [State[K]] ? K : never]: true;
};

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: RootState, action: UnknownAction) => RootState;
    add: <K extends keyof StateSchema>(
        key: K,
        reducer: Reducer<Exclude<StateSchema[K], undefined>>,
    ) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}
