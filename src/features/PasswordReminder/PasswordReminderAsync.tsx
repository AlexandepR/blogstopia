import type { FC } from 'react';
import { lazy } from 'react';
import type { PasswordByEmailReminderProps } from './PasswordReminder';

export const PasswordByEmailReminderAsync = lazy<
    FC<PasswordByEmailReminderProps>
>(async () => await import('./PasswordReminder'));
