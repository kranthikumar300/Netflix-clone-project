import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { API_OPTIONS } from "../Utils/constants"
import { addTopRatedMovies } from "../Utils/movieSlice"


const useRatedMovies = () => {

      //useDispatch Hook
    const dispatch = useDispatch()

    //useEffect Hook for calling getNowPlayingMovies func
    useEffect(() => {
        getPopularMovies()
    },[])

    //fetching the Movies Data from TMDB API
    const getPopularMovies = async() => {
        const popularMoviesData = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
        const popularDataJson = await popularMoviesData.json()
       

        //Dispatching the addNewMovies action
        dispatch(addTopRatedMovies(popularDataJson.results))
    }

}

export default useRatedMovies