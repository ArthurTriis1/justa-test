import React from 'react';
import IMovieSearch from '../../typescript/IMovieSearch';
import notFoundImage from '../../assets/imageNotFound.webp'
import * as S from './styles';

interface IMovieSearchSpan {
    click: (id: number) => void;
    movie: IMovieSearch;
}

const MovieSearchSpan: React.FC<IMovieSearchSpan> = ( { movie, click } ) => {

    const { 
        title, 
        id, 
        release_date, 
        vote_average, 
        poster_path 
    } = movie;

    const dateRelease = `${release_date?.split("-")[2]}/${release_date?.split("-")[1]}/${release_date?.split("-")[0]}`
    return (
        <S.MovieSearchSpanWrapper onClick={() => click(id)}>
            {
                Boolean(poster_path) ?
                <S.MovieSearchImage backgroundImage={`https://image.tmdb.org/t/p/w200${poster_path}`}/> :
                <S.MovieSearchImage backgroundImage={notFoundImage}/>
            }
            
            <S.MovieSearchInfosWrapper>
                <S.MovieTitle>
                    {title}
                </S.MovieTitle>
                <S.MovieInfo>
                    Nota: { vote_average }
                </S.MovieInfo>
                {
                    release_date &&
                    <S.MovieInfo>
                        Data de lançamento: { dateRelease }
                    </S.MovieInfo>
                }
            </S.MovieSearchInfosWrapper>
        </S.MovieSearchSpanWrapper>
    );
}

export default MovieSearchSpan;