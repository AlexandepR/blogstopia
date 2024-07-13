export interface LoginSchema {
    loginOrEmail: string;
    password: string;
    isLoading: boolean;
    accessToken?: string;
    error?: string;
}
