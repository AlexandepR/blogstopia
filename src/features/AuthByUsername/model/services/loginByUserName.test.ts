import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { loginByUserName } from 'features/AuthByUsername/model/services/loginByUserName';

describe('LoginByUserName', () => {
    test('SignIn successfully', async () => {
        const user = {
            loginOrEmail: 'user',
            password: 'user123',
        };
        const successResponse = {
            data: {
                accessToken: 'accessToken',
            },
        };
        const thunk = new TestAsyncThunk(loginByUserName);
        thunk.api.post.mockResolvedValueOnce(successResponse);

        const result = await thunk.callThunk(user);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(successResponse.data);
    });
    test('SignIn failed', async () => {
        const user = {
            loginOrEmail: 'user',
            password: 'user123',
        };
        const failedResponse = {
            response: { status: 401 },
        };
        const thunk = new TestAsyncThunk(loginByUserName);
        thunk.api.post.mockRejectedValueOnce(failedResponse);

        const result = await thunk.callThunk(user);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
