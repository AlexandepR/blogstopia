import { Story } from '@storybook/react';
import { Theme } from 'src/app/providers/ThemeProviders';


export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
