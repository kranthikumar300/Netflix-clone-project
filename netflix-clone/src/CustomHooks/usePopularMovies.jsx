import { API_OPTIONS } from "../Utils/constants"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import {addPopularMovies} from "../Utils/movieSlice"

const usePopularMovies = () => {

    //useDispatch Hook
    const dispatch = useDispatch()

    //useEffect Hook for calling getNowPlayingMovies func
    useEffect(() => {
        getPopularMovies()
    },[])

    //fetching the Movies Data from TMDB API
    const getPopularMovies = async() => {
        const popularMoviesData = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
        const popularDataJson = await popularMoviesData.json()
        

        //Dispatching the addNewMovies action
        dispatch(addPopularMovies(popularDataJson.results))
    }

}
export default usePopularMovies