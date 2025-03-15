import { useEffect } from "react"
import {API_OPTIONS} from "./../Utils/constants"
import { useDispatch} from "react-redux"
import { addNewTrailer } from "../Utils/movieSlice"

const useMovieTrailer = ( movieId ) => {

     //useDispatch Hook trailerDispatch to store(action -> initialState)
    const trailerDispatch = useDispatch()

    //useEffect to call the getNewTrailer func
    useEffect(() => {
      getNewTrailer()
    },[])

    //fetching the trailer from TMDB video-API
    const getNewTrailer = async() => {
      const trailerData = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",API_OPTIONS)
      const trailerJson = await trailerData.json()

      //filtering the wanted Trailer[27] from the TMDB Video-API
      const filterTrailer = trailerJson.results.filter((video) => video.type === "Trailer")
      const MainTrailer = filterTrailer.length ? filterTrailer[0] : trailerJson.results[0]
      trailerDispatch(addNewTrailer(MainTrailer))

   }
}

export default useMovieTrailer