import { screen , render} from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import Home from './Home'

describe('Home Page', () => {
    beforeEach(() => render(<Home />, { wrapper: MemoryRouter }));

    it('should display a logo', () => {
        expect(screen.getByAltText(/logo/)).toBeInTheDocument()
    });

    it('should display a link to the game page', () => {
        expect(screen.getByRole('link', {name: 'Play'})).toBeInTheDocument()
    });
});