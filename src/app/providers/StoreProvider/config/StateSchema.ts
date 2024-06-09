import type { UserSchema } from 'entities/User';
import type { RegistrationSchema } from 'features/RegistrationByUserName';
import type { ConfirmCodeSchema } from 'features/ConfirmByCode/model/types/confirmSchema';

export interface StateSchema {
    user: UserSchema;
    registrationForm: RegistrationSchema;
    confirmCode: ConfirmCodeSchema;
}
