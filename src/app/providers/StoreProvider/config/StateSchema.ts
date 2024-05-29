import type { UserSchema } from 'entities/User';
import type { RegistrationSchema } from 'features/RegistrationByUserName';

export interface StateSchema {
    user: UserSchema;
    registrationForm: RegistrationSchema;
}
