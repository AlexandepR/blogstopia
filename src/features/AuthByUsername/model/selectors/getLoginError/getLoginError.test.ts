import { getLoginError } from './getLoginError';
import type { StateSchema } from 'app/providers/StoreProvider';
import type { DeepPartial } from 'app/providers/StoreProvider/config/StateSchema';

describe('getLoginError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                loginOrEmail: '',
                password: '',
                isLoading: false,
                error: 'Неверный логин или пароль',
            },
        };

        expect(getLoginError(state as StateSchema)).toEqual(
            'Неверный логин или пароль',
        );
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});
