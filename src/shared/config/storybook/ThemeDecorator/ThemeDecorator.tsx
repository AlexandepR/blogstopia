import type { Story } from '@storybook/react';
import type { Theme } from 'app/providers/ThemeProviders';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
