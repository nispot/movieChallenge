import {useState, useEffect} from 'react';
import { getMovies } from '../helpers/getMovies';

export const useFetchMovies = (url) => {

    const [state, setState] = useState({movies: [], error: null, loading:true});

    useEffect(() => {
        getMovies(url)
        .then(movies =>
            setState({
                movies, 
                error:null,
                loading: false
            })
            )
       
    }, [url])

    return state
}
