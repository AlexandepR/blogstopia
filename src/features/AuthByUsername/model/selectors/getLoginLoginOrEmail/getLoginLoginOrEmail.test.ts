import type {
    DeepPartial,
    StateSchema,
} from 'app/providers/StoreProvider/config/StateSchema';
import { getLoginLoginOrEmail } from './getLoginLoginOrEmail';

describe('getLoginLoginOrEmail.test', () => {
    test('should get login', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                loginOrEmail: 'user',
                password: '',
                isLoading: false,
            },
        };

        expect(getLoginLoginOrEmail(state as StateSchema)).toEqual('user');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginLoginOrEmail(state as StateSchema)).toEqual('');
    });
});
