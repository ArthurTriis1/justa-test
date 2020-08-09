import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import  Routes  from '../../routes';

test('Check Movie Title', async () => {
    const history = createMemoryHistory()
    history.push('/movie/24428')
    const { findByText, debug } = render(
        <Router history={history}>
            <Routes />
        </Router>
    )

    const TitleElement = await findByText(/Os Vingadores: The Avengers/i );
    debug();
    expect(TitleElement).toBeInTheDocument();

})