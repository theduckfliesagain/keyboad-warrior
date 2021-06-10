import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Word from './Word'

describe('Word', () => {
    let complete = jest.fn();

    beforeEach(() => {
        render(<Word id={0} word={"Test"} complete={complete}/>)
    });

    it('should display the given word', () => {
        expect(screen.getByText("Test")).toBeInTheDocument()
    });

    it('should display correctly typed letters', () => {
        const input = screen.getByRole('textbox')
        userEvent.type(input, "Tes")
        expect(input).toHaveValue("Tes")
    });

    it('should not display incorrect letters', () => {
        const input = screen.getByRole('textbox')
        userEvent.type(input, "Ter")
        expect(input).toHaveValue("Te")
    });

    it('should complete when the word is correct and space is pressed', () => {
        const input = screen.getByRole('textbox')
        userEvent.type(input, "Test")
        fireEvent.keyDown(input, { key: 'Space', code: 'Space' })
        expect(complete).toHaveBeenCalled()
    });

    it('should return 1.0 for perfect accuracy', () => {
        const input = screen.getByRole('textbox')
        userEvent.type(input, "Test")
        fireEvent.keyDown(input, { key: 'Space', code: 'Space' })
        expect(complete).toHaveBeenCalledWith(0, 1.0)
    });

    it('should reduce accuracy for each incorrect letter', () => {
        const input = screen.getByRole('textbox')
        userEvent.type(input, "Terst")
        fireEvent.keyDown(input, { key: 'Space', code: 'Space' })
        expect(complete).toHaveBeenCalledWith(0, 0.75)
    });

    it('should not reduce accuracy until a letter is typed', () => {
        render(<Word id={1} word={"word"} complete={complete}/>)
        const input = screen.getAllByRole('textbox')[1]
        input.focus()
        userEvent.type(input, "word")
        fireEvent.keyDown(input, { key: 'Space', code: 'Space' })
        expect(complete).toHaveBeenCalledWith(1, 1.0)
    });
});