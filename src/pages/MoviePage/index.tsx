import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IMovie from '../../typescript/IMovie';
import apiTMDB from '../../services/apiTMDB';
import { AiFillStar } from 'react-icons/ai'
import * as S from './styles';

const MoviePage: React.FC = () => {
    const { id }= useParams()

    const [movieData, setMovieData] = useState<IMovie>({
        original_title: '',
        overview: '',
        poster_path: '',
        release_date: '',
        title: '',
    })

    useEffect(() => {
        (async () => {
            const { data } = await apiTMDB.get(`/movie/${id}`, {
                params: {
                    api_key:  process.env.REACT_APP_TMDB_KEY,
                    language: "pt-BR",
                }
            })
            setMovieData(data);
        })()
    }, [id])

    useEffect(() => {
        console.log('moviedata', movieData)
    }, [movieData])

    return (
        <S.MovieMain>
            <S.MovieWrapper>
                <S.MovieImage backgroundImage={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} />
                <S.InfoWrapper>
                    <h1>{movieData.title}<span>{movieData.release_date.split('-')[0]}</span></h1>
                    <span>{movieData.original_title}</span>
                    <span> Avaliação: {movieData.vote_average} <AiFillStar size={20}/> </span>
                    <S.Sinopse>
                        {movieData.overview}
                    </S.Sinopse>
                </S.InfoWrapper>
                <S.GenresWrapper>
                    <h3>Gêneros: </h3>
                    {
                        movieData?.genres?.map(genre => (
                            <S.Genre key={genre.id}>
                                {genre.name}
                            </S.Genre>
                        ))
                    }
                </S.GenresWrapper>
            </S.MovieWrapper>
        </S.MovieMain>
    )
}

export default MoviePage;