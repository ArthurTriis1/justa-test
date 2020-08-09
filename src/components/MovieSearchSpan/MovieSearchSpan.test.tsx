import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import MovieSearchSpan from './index';
import { formatDate } from '../../utils/formatDate';

const movie = {
    id: 24428,
    poster_path: 'u49fzmIJHkb1H4oGFTXtBGgaUS1.jpg',
    title: "Os Vingadores: The Avengers",
    vote_average: 7.7,
    release_date: '2012-04-25',
}

test('Check click and return id', () => {
    let clickedId = 0;
    const checkClicked = (e: number) => {
        clickedId = e;
    }
    
    const { getByTestId } = render(
        <MovieSearchSpan 
            click={checkClicked}
            movie={movie}
        />
    );
    const movieSearchSpanElement = getByTestId('movieSearchSpan');

    fireEvent(
        movieSearchSpanElement,
        new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        })
    )
    expect(clickedId).toEqual(movie.id);
});

test('Check render value Title', () => {
    const { getByText } = render(
        <MovieSearchSpan 
            click={() => {}}
            movie={movie}
        />
    );
    
    const titleElement = getByText(new RegExp(String(movie.title), 'i'));
    expect(titleElement).toBeInTheDocument();
})

test('Check render value Vote', () => {
    const { getByText } = render(
        <MovieSearchSpan 
            click={() => {}}
            movie={movie}
        />
    );
    const voteElement = getByText(new RegExp(String(movie.vote_average), 'i'));
    expect(voteElement).toBeInTheDocument();
})

test('Check render value Date', () => {
    const { getByText } = render(
        <MovieSearchSpan 
            click={() => {}}
            movie={movie}
        />
    );
    const dateElement = getByText(new RegExp(formatDate(movie.release_date), 'i'));
    expect(dateElement).toBeInTheDocument();
})



