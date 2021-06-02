import { screen } from '@testing-library/react';
import WordBlock from './WordBlock'

describe('WordBlock', () => {
    describe('rendering', () => {
        beforeEach(() => {
            render(<WordBlock wordBlock={"Test word block"}/>)
        });

        it.each(["Test", "word", "block"])('render %s', (word) => {
            expect(screen.getByText(word)).toBeInTheDocument()
        });
    });
});