import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import  Routes  from '../../routes';

test('landing on a bad page shows 404 page', () => {
    const history = createMemoryHistory()
    history.push('/randompage')
    const { getByTestId } = render(
      <Router history={history}>
        <Routes />
      </Router>
    )

    const dateElement = getByTestId('404-message');
    expect(dateElement).toBeInTheDocument();
})