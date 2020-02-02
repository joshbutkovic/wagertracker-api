import React from 'react';
import { render } from '@testing-library/react';
import WagerTracker from './WagerTracker';

test('renders learn react link', () => {
    const { getByText } = render(<WagerTracker />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
