import React from 'react';
import { render, screen } from '@testing-library/react';
import { HomePage } from './HomePage';

describe(`HomePage`, (): void => {
    it('has heading with the right value', () => {
        render(<HomePage />);
        const main = screen.getByRole('main');
        expect(main).toBeInTheDocument();
    });
});
