import { useEffect } from "react"
import { API_OPTIONS } from "../Utils/constants"
import {useDispatch} from "react-redux"
import { addNewMovies } from "../Utils/movieSlice"


const useGetMovies = () => {
     
    //useDispatch Hook
    const dispatch = useDispatch()

    //useEffect Hook for calling getNowPlayingMovies func
    useEffect(() => {
        getNowPlayingMovies()
    },[])

    //fetching the Movies Data from TMDB API
    const getNowPlayingMovies = async() => {
        const moviesData = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
        const dataJson = await moviesData.json()

        //Dispatching the addNewMovies action
        dispatch(addNewMovies(dataJson.results))
    }
}

export default useGetMovies