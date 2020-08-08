import React,{ useRef } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdSad } from 'react-icons/io';
import IMovieSearch from '../../typescript/IMovieSearch';
import MovieSearchSpan from '../MovieSearchSpan';
import * as S from './styles';

interface ISearchBar {
    change: (input: string) => void;
    moviesSearch: IMovieSearch[];
    movieClicked: (input: number) => void;
}

const SearchBar: React.FC<ISearchBar> = ({  change, moviesSearch, movieClicked }) => {
    
    const searchInputRef = useRef<HTMLInputElement>(null);
    
    return (
        <S.SearchContainer>
            <S.SearchBarWrapper>
                <S.SearchInput 
                    ref={searchInputRef}
                    onChange={e => {
                        console.log(searchInputRef.current?.value);
                        change(e.target.value)
                    }}
                    type="text"
                    placeholder="Pesquisar..."/>
                <S.SearchButton>
                    <AiOutlineSearch size={30}/>
                </S.SearchButton>
            </S.SearchBarWrapper>
            <S.MovieSearchContainer>
                {
                    Boolean(moviesSearch.length) &&
                    moviesSearch.map(movie => (
                        <MovieSearchSpan 
                            key={movie.id}
                            movie={movie}
                            click={id => movieClicked(id)}
                        />
                    ))
                }

                {
                    !moviesSearch.length && searchInputRef.current?.value &&
                    <S.SadMessage>
                        Nenhum Filme encontrado 
                        <IoMdSad size={30}/>
                    </S.SadMessage>
                }
            </S.MovieSearchContainer>
        </S.SearchContainer>
    )
}

export default SearchBar;