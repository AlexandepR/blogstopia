import type { AsyncThunkAction } from '@reduxjs/toolkit';
import type { AxiosInstance } from 'axios';
import axios from 'axios';
import type { StateSchema } from 'app/providers/StoreProvider';

type ActionCreatorType<Return, Arg, RejectedValue> = (
    arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

jest.mock('axios', () => {
    return {
        create: jest.fn(() => ({
            get: jest.fn(),
            post: jest.fn(),
            interceptors: {
                request: { use: jest.fn(), eject: jest.fn() },
                response: { use: jest.fn(), eject: jest.fn() },
            },
        })),
    };
});

const mockedAxios = axios.create() as jest.Mocked<AxiosInstance>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;
    dispatch: jest.MockedFn<any>;
    getState: () => StateSchema;
    api: jest.Mocked<AxiosInstance>;
    navigate: jest.MockedFn<any>;

    constructor(
        actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
        state?: Partial<StateSchema>,
    ) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn(() => state as StateSchema);
        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, {
            api: this.api,
            navigate: this.navigate,
        });

        return result;
    }
}
