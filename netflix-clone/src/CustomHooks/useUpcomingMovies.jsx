import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../Utils/constants"
import { useEffect } from "react"
import { addUpcomingMovies } from "../Utils/movieSlice"

const useUpcomingMovies = () => {

    //useDispatch Hook
    const dispatch = useDispatch()

    //useEffect Hook for calling getNowPlayingMovies func
    useEffect(() => {
        getPopularMovies()
    },[])

    //fetching the Movies Data from TMDB API
    const getPopularMovies = async() => {
        const popularMoviesData = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
        const popularDataJson = await popularMoviesData.json()
        

        //Dispatching the addNewMovies action
        dispatch(addUpcomingMovies(popularDataJson.results))
    }

}

export default useUpcomingMovies