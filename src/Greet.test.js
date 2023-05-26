import React from 'react';
import { render } from '@testing-library/react';
import Greet from './Greet';

test('renders greeting with name', () => {
  const { getByText } = render(<Greet name="John" />);
  const greetingElement = getByText(/Hello, John!/i);
  expect(greetingElement).toBeInTheDocument();
});