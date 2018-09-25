import React from 'react';
import { cleanup, fireEvent } from 'react-testing-library';
import renderWithRouter from './helpers/routerTestHelper';
import 'jest-dom/extend-expect';
import App from '../App';

afterEach(cleanup);

describe('Test Page Counter', () => {
  test('it should match page number', () => {
    const { getByText, getByTestId } = renderWithRouter(<App />);

    const leftClick = { button: 0 };
    fireEvent.click(getByText(/about/i), leftClick);

    expect(getByTestId('4')).toBeInTheDocument();
  });
});
