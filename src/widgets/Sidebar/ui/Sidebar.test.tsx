// import { render, screen } from '@testing-library/react';
// import { Sidebar } from 'src/widgets/Sidebar';
//
// describe('Sidebar', () => {
//     test('Test render', () => {
//         render(<Sidebar/>);
//         expect(screen.getByTestId('sidebar')).toBeInTheDocument();
//         screen.debug()
//     });
// });

import { fireEvent, render, screen } from '@testing-library/react';
// import { Sidebar } from 'src/widgets/Sidebar/ui/Sidebar/Sidebar';
import {
    renderWithTranslation,
} from 'src/shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from 'src/widgets/Sidebar';
import { withTranslation } from 'react-i18next';
import { MemoryRouter } from 'react-router';

describe('Sidebar', () => {
    test('with only first param', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        console.log(screen.getByTestId('sidebar'), '-----');
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
