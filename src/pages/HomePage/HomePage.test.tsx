import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './';

test('Title in home page', () => {
  const { getByTestId } = render(<HomePage />);
  const linkElement = getByTestId('textHomePage');
  expect(linkElement).toBeInTheDocument();
});

test('SearchBar in home page', () => {
    const {  getByTestId } = render(<HomePage />);
    const linkElement = getByTestId('searchInput');
    expect(linkElement).toBeInTheDocument();
});