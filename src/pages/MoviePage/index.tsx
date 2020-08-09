import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import IMovie from '../../typescript/IMovie';
import ICast from '../../typescript/ICast';
import apiTMDB from '../../services/apiTMDB';
import { AiFillStar } from 'react-icons/ai'
import ImagesContainer from '../../components/ImagesContainer';
import * as S from './styles';

interface IBackdrop{
    file_path: string;
}

const MoviePage: React.FC = () => {
    const { id }= useParams();

    const history = useHistory();

    const [movieData, setMovieData] = useState<IMovie>({
        original_title: '',
        overview: '',
        poster_path: '',
        release_date: '',
        title: '',
        id: 0
    })

    const [casts, setCasts] = useState<ICast[]>([]);

    const [galery, setGalery] = useState<string[]>([]);

    const [similarMovies, setSimilarMovies] = useState<IMovie[]>([])

    useEffect(() => {
        (async () => {
            try{
                const { data } = await apiTMDB.get(`/movie/${id}`, {
                    params: {
                        api_key:  process.env.REACT_APP_TMDB_KEY,
                        language: "pt-BR",
                    }
                })

                setMovieData(data);
            }catch(err){
                history.push('/')
            }
        })()
    }, [id, history])

    useEffect(() => {
        (async () => {
            try{
                const { data : { cast } } = await apiTMDB.get(`/movie/${id}/credits`, {
                    params: {
                        api_key:  process.env.REACT_APP_TMDB_KEY,
                        language: "pt-BR",
                    }
                })
                setCasts(cast.slice(0, 10));
            }catch(err){
                setCasts([]);
            }
        })()
    }, [id, history])

    useEffect(() => {
        (async () => {
            try{
                const { data : { results } } = await apiTMDB.get(`/movie/${id}/similar`, {
                    params: {
                        api_key:  process.env.REACT_APP_TMDB_KEY,
                        language: "pt-BR",
                    }
                })
                setSimilarMovies(results.slice(0, 10));
            }catch(err){
                setSimilarMovies([]);
            }
        })()
        //eslint-disable-next-line
    }, [id, history])

    useEffect(() => {
        (async () => {
            try{
                const { data : { backdrops } } = await apiTMDB.get(`/movie/${id}/images`, {
                    params: {
                        api_key:  process.env.REACT_APP_TMDB_KEY,
                    }
                })

                const files_path = backdrops.map((back: IBackdrop) => back.file_path)

                setGalery(files_path.slice(0, 10));
            }catch(err){
                setGalery([]);
            }
        })()
    }, [id, history])


    return (
        <S.MovieMain>
            <S.MovieWrapper>
                {
                    !!movieData.poster_path &&
                    <S.MovieImage backgroundImage={`${process.env.REACT_APP_TMDB_IMAGE_URL}w500${movieData.poster_path}`} />
                }
                <S.InfoWrapper>
                    <h1>{movieData.title}<span>{movieData.release_date.split('-')[0]}</span></h1>
                    <span>{movieData.original_title}</span>
                    <span> Avaliação: {movieData.vote_average} <AiFillStar size={20}/> </span>
                    <S.Sinopse>
                        {movieData.overview}
                    </S.Sinopse>
                </S.InfoWrapper>
                <S.AditionalInfosWrapper>
                    <ImagesContainer title="Gêneros">
                        {
                            movieData?.genres?.map(genre => (
                                <S.Genre key={genre.id}>
                                    {genre.name}
                                </S.Genre>
                            ))
                        }
                    </ImagesContainer>
                    {
                        !!casts.length &&
                        <ImagesContainer title="Casting">
                            {
                                casts
                                    .filter(cast => cast.profile_path)
                                    .map(cast => (
                                        <S.Actor 
                                            key={cast.cast_id}
                                            title={`${cast.name} - ${cast.character}`}
                                        >
                                            <img 
                                                src={`${process.env.REACT_APP_TMDB_IMAGE_URL}w200${cast.profile_path}`} 
                                                alt={`${cast.name} - ${cast.character}`}/>
                                            <h5>{cast.name}</h5>
                                            <h6>{cast.character}</h6>
                                        </S.Actor>
                                    ))
                            }
                            
                        </ImagesContainer>
                    }
                    {
                        !!galery.length &&
                        <ImagesContainer title="Galery">
                            {
                                galery.map((image_path, id) => (
                                    <S.ImageOfGalery 
                                        src={`${process.env.REACT_APP_TMDB_IMAGE_URL}w500${image_path}`} 
                                        key={id}
                                    />
                                ))
                            }
                        </ImagesContainer>
                    }
                    {
                        !!similarMovies.length &&
                        <ImagesContainer title="Talvez você também possa gostar">
                        {
                                similarMovies.map(movie => (
                                    <S.SimilarMovie 
                                        title={movie.title}
                                        onClick={() => history.push(`/movie/${movie.id}`)}
                                        key={movie.id}>
                                        <img 
                                            src={`${process.env.REACT_APP_TMDB_IMAGE_URL}w300${movie.poster_path}`} 
                                            alt={movie.title}/>
                                        <h5>{movie.title}</h5>
                                        <h6>{movie.original_title}</h6>
                                    </S.SimilarMovie>
                                ))
                            }
                        </ImagesContainer>
                    }
                </S.AditionalInfosWrapper>
            </S.MovieWrapper>
        </S.MovieMain>
    )
}

export default MoviePage;