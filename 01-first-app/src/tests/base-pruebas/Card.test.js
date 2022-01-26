import React from 'react';
import { render } from '@testing-library/react';
import Card from '../../Card';

describe('Testing a react component', () => {
    test('should contain the text "This is a React component"', () => {
        const text = "This is a React component";
        const { getByText } = render(<Card />);

        expect(getByText(text)).toBeInTheDocument();
    });
});