/* eslint-disable */

import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import App from '../App';

it('renders without crashing', () => {
  const { getByText } = render(<App />);

  expect(getByText('Hello World')).toBeInTheDocument();
});
