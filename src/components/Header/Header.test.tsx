import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import  Header  from './';

test('Check header title', () => {
    const history = createMemoryHistory()
    history.push('/movie/24428')
    const { getByText } = render(
      <Router history={history}>
        <Header/>
      </Router>
    )

    const headerElement = getByText(/Justaflix/i);
    expect(headerElement).toBeInTheDocument();
})

test('Back link should show', async () => {
    const history = createMemoryHistory()
    history.push('/movie/24428')


    const { findByTestId } = render(
      <Router history={history}>
        <Header/>
      </Router>
    )

    expect(await findByTestId('back-link')).toBeInTheDocument();
})

test(`Back link shouldn't show`, async () => {
    const history = createMemoryHistory()
    history.push('/')


    const { queryByTestId } = render(
      <Router history={history}>
        <Header/>
      </Router>
    )

    expect(queryByTestId('back-link')).toBeNull();
})