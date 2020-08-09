import React from 'react';
import IMovieSearch from '../../typescript/IMovieSearch';
import notFoundImage from '../../assets/imageNotFound.webp'
import * as S from './styles';
import { formatDate } from '../../utils/formatDate';

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

    const dateRelease = formatDate(release_date)
    return (
        <S.MovieSearchSpanWrapper 
            onClick={() => click(id)}
            data-testid='movieSearchSpan'
        >
            {
                Boolean(poster_path) ?
                <S.MovieSearchImage backgroundImage={`${process.env.REACT_APP_TMDB_IMAGE_URL}w200${poster_path}`}/> :
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