import type {
    DeepPartial,
    StateSchema,
} from 'app/providers/StoreProvider/config/StateSchema';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
    test('should get true in loading', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                loginOrEmail: '',
                password: '',
                isLoading: true,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
