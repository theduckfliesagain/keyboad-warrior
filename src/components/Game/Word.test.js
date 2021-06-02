import { screen } from '@testing-library/react';
import Word from './Word'

describe('Word', () => {
    it('should display the given word', () => {
        render(<Word word={"Test"}/>)
        expect(screen.getByText("Test")).toBeInTheDocument()
    });
});