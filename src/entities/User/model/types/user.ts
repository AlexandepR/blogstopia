export interface User {
    userId: string;
    loginOrEmail: string;
}

export interface UserSchema {
    authData?: User;
}
