import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { loginByUserName } from 'features/AuthByUsername/model/services/loginByUserName';

jest.mock('jwt-decode', () => ({
    jwtDecode: () => 'jwtDecode',
}));

describe('LoginByUserName.test', () => {
    const user = {
        loginOrEmail: 'user',
        password: 'user123',
    };

    test('SignIn successfully', async () => {
        const successResponse = {
            data: {
                accessToken: 'accessToken',
            },
        };
        const thunk = new TestAsyncThunk(loginByUserName);
        thunk.api.post.mockResolvedValueOnce(successResponse);

        const result = await thunk.callThunk(user);

        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(successResponse.data);
    });

    test('SignIn failed', async () => {
        const failedResponse = {
            response: { status: 401 },
        };
        const thunk = new TestAsyncThunk(loginByUserName);
        thunk.api.post.mockRejectedValueOnce(failedResponse);

        const result = await thunk.callThunk(user);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Неверный логин или пароль');
    });
});
