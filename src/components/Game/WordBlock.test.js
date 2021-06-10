import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WordBlock from './WordBlock'

describe('WordBlock', () => {
    describe('rendering', () => {
        beforeEach(() => {
            render(<WordBlock wordBlock={"Test word block"} />)
        });

        it.each(["Test", "word", "block"])('should render %s', (word) => {
            expect(screen.getByText(word)).toBeInTheDocument()
        });
    });

    describe('interaction', () => {
        let wordBlock;
        let updateStats;

        beforeEach(() => {
            updateStats = jest.fn();
            wordBlock = render(<WordBlock wordBlock={"Test typing these words."} updateStats={updateStats} />)
        });

        it('should be focused on the first input on load', () => {
            expect(wordBlock.getAllByRole('textbox')[0]).toHaveFocus()
        });

        it('should shift focus to the next word when the user presses space and the word is complete', () => {
            const firstWord = wordBlock.getAllByRole('textbox')[0];

            userEvent.type(firstWord, "Test", { skipClick: true })
            expect(wordBlock.getAllByRole('textbox')[0]).toHaveValue('Test')

            fireEvent.keyDown(firstWord, { key: 'Space', code: 'Space' })
            expect(wordBlock.getAllByRole('textbox')[1]).toHaveFocus()
        });
    });
});