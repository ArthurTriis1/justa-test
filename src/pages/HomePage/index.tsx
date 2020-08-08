import React, {useEffect, useState} from 'react';
import SearchBar from '../../components/SearchBar';
import * as S from './styles';
import apiTMDB from '../../services/apiTMDB';
import IMovieSearch from '../../typescript/IMovieSearch';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
    
    const [ searchReturn, setSearchReturn ] = useState<IMovieSearch[]>([]);
    const [ search, setSearch ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const history = useHistory();

    useEffect(() => {
        if(search){
            (async () => {
                setLoading(true)
                const { data : { results } } = await apiTMDB.get("/search/movie", {
                    params: {
                        api_key:  process.env.REACT_APP_TMDB_KEY,
                        language: "pt-BR",
                        query: search
                    }
                })
                const tempTrending = results.slice(0, 6);
                setSearchReturn(tempTrending);
                setLoading(false)
            })()
        }else{
            setSearchReturn([]);
        }
    }, [search])

    const goToMoviePage = (id: number) => {
        history.push(`movie/${id}`)
    }

    return (
        <S.HomeMain>
            <S.HomeContainer>
                <S.HomeTitle>Procure por um filme<span>_</span></S.HomeTitle>
                <SearchBar 
                    moviesSearch={searchReturn}
                    change={e => setSearch(e)}
                    movieClicked={id => goToMoviePage(id)}
                    loading={loading}
                ></SearchBar>
            </S.HomeContainer>
        </S.HomeMain>
    );
}

export default Home;