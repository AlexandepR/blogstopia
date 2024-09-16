import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { User, UserSchema } from '../types/user';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { COOKIE } from 'shared/const/cookies';

const initialState: UserSchema = {};
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            console.log(state.authData, '----------state.authData------');
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        logout: (state) => {
            state.authData = undefined;
            document.cookie = `${COOKIE.ACCESS_TOKEN}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT`;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
