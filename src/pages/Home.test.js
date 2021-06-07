import { screen , render} from '@testing-library/react';
import Home from './Home'

describe('Home Page', () => {
    it('should display a logo', () => {
        render(<Home />)
        expect(screen.getByAltText(/logo/)).toBeInTheDocument()
    });

    it('should display a link to the game page', () => {
        expect(screen.getByRole('link', {name: 'Play'})).toBeInTheDocument()
    });
});