import type { ReducersMapObject } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import type { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { userReducer } from 'entities/User';
import { registrationReducer } from 'features/RegistrationByUserName';
import { confirmCodeReducer } from 'features/ConfirmByCode/model/slice/confirmSlice';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
        registrationForm: registrationReducer,
        confirmCode: confirmCodeReducer,
        login: loginReducer,
    };

    return configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
