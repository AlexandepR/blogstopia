import {
    loginActions,
    loginReducer,
} from 'features/AuthByUsername/model/slice/loginSlice';
import type { LoginSchema } from 'features/AuthByUsername';

describe('loginSlice.test', () => {
    test('test set login or email', () => {
        const state = {
            loginOrEmail: 'user',
        };

        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setLoginOrEmail('user1'),
            ),
        ).toEqual({ loginOrEmail: 'user1' });
    });

    test('test set password', () => {
        const state = {
            password: 'pass',
        };

        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword('pass_new'),
            ),
        ).toEqual({ password: 'pass_new' });
    });
});
