/* eslint-disable */

import React from 'react';
import { render } from 'react-testing-library';
import renderWithRouter from './helpers/routerTestHelper';
import 'jest-dom/extend-expect';
import App from '../App';

it('renders without crashing', () => {
  const { getByText } = renderWithRouter(<App />);

  expect(getByText('BAIAS MAMETJANOV')).toBeInTheDocument();
});
