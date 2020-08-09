import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import { formatDate } from '../../utils/formatDate';
import SearchBar from './index';

const moviesSearch = {
    poster_path: "/u49fzmIJHkb1H4oGFTXtBGgaUS1.jpg",
    id: 24428,
    title: "Os Vingadores: The Avengers",
    vote_average: 7.7,
    release_date: "2012-04-25"
}

test('Check render search movie title', () => {
    const { getByText } = render(
        <SearchBar 
            change={e => {}}  
            movieClicked={e => {}}
            loading={false}
            moviesSearch={[moviesSearch]}
        />
    );

    const searchElementTitle = getByText(new RegExp(moviesSearch.title, 'i'));
    expect(searchElementTitle).toBeInTheDocument();

});

test('Check render search movie year', () => {
    const { getByText } = render(
        <SearchBar 
            change={e => {}}  
            movieClicked={e => {}}
            loading={false}
            moviesSearch={[moviesSearch]}
        />
    );

    const searchElementTitle = getByText(new RegExp(formatDate(moviesSearch.release_date), 'i'));
    expect(searchElementTitle).toBeInTheDocument();

});

test('Check render search movie title', () => {
    const { getByText } = render(
        <SearchBar 
            change={e => {}}  
            movieClicked={e => {}}
            loading={false}
            moviesSearch={[moviesSearch]}
        />
    );

    const searchElementTitle = getByText(new RegExp(moviesSearch.title, 'i'));
    expect(searchElementTitle).toBeInTheDocument();

});

test('Check message without network', () => {
    const { getByTestId } = render(
        <SearchBar 
            change={e => {}}  
            movieClicked={e => {}}
            loading={false}
            moviesSearch={[]}
            withOutNetwork={true}
        />
    );
    const linkElement = getByTestId('networkWithoutNetwork');
    expect(linkElement).toBeInTheDocument();
});

test('Check if input be in document', () => {
    const { getByTestId } = render(
        <SearchBar 
            change={e => {}}  
            movieClicked={e => {}}
            loading={false}
            moviesSearch={[]}
            withOutNetwork={false}
        />
    );
    const linkElement = getByTestId("searchInput");
    expect(linkElement).toBeInTheDocument();
});

test('Check change event', () => {
    
    let testChange = ''
    const valueCheck = 'test';

    const checkChange = ( input:string ) => {
        testChange = input;
    }

    const { getByTestId } = render(
        <SearchBar 
            change={input => checkChange(input)}  
            movieClicked={e => {}}
            loading={false}
            moviesSearch={[]}
            withOutNetwork={false}
        />
    );

    const searchInput = getByTestId("searchInput");

    fireEvent.change(
        searchInput, 
        { target: { value: valueCheck } },
    )

    const linkElement = getByTestId("searchInput");
    expect(valueCheck).toEqual(testChange);
});