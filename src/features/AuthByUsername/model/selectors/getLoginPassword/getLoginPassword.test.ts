import type {
    DeepPartial,
    StateSchema,
} from 'app/providers/StoreProvider/config/StateSchema';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
    test('should get password', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                loginOrEmail: '',
                password: 'password',
                isLoading: false,
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('password');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
