import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('Button', () => {
    test('with only first param', () => {
        componentRender(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('ClassNames', () => {
        componentRender(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
