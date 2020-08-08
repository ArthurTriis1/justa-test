import React,{ useRef } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdSad } from 'react-icons/io';
import IMovieSearch from '../../typescript/IMovieSearch';
import MovieSearchSpan from '../MovieSearchSpan';
import ReactLoading from "react-loading";

import * as S from './styles';

interface ISearchBar {
    change: (input: string) => void;
    moviesSearch: IMovieSearch[];
    movieClicked: (input: number) => void;
    loading: boolean;
}

const SearchBar: React.FC<ISearchBar> = ({  change, moviesSearch, movieClicked, loading }) => {
    
    const searchInputRef = useRef<HTMLInputElement>(null);
    
    return (
        <S.SearchContainer>
            <S.SearchBarWrapper>
                <S.SearchInput 
                    ref={searchInputRef}
                    onChange={e => change(e.target.value)}
                    type="text"
                    placeholder="Pesquisar..."/>
                <S.SearchButton>
                    <AiOutlineSearch size={30}/>
                </S.SearchButton>
            </S.SearchBarWrapper>
            <S.MovieSearchContainer>
                {
                    Boolean(moviesSearch.length) && !loading &&
                    moviesSearch.map(movie => (
                        <MovieSearchSpan 
                            key={movie.id}
                            movie={movie}
                            click={id => movieClicked(id)}
                        />
                    ))
                }

                {
                    !moviesSearch.length && searchInputRef.current?.value && !loading &&
                    <S.SadMessage>
                        Nenhum Filme encontrado 
                        <IoMdSad size={30}/>
                    </S.SadMessage>
                }
                {
                    loading &&
                    <S.SadMessage>
                        <ReactLoading type="bubbles" color="#fff" />
                    </S.SadMessage>
                }
            </S.MovieSearchContainer>
        </S.SearchContainer>
    )
}

export default SearchBar;