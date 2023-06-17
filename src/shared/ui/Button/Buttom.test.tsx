import Button, { ThemeButton } from 'src/shared/ui/Button/Button';
import { render, screen } from '@testing-library/react';


describe('Button', () => {
    test('with only first param', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('ClassNames', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug()
    });
});