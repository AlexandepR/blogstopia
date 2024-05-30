export interface User {
    id: string;
    name: string;
    email: string;
}

export interface UserSchema {
    authData?: User;
}
