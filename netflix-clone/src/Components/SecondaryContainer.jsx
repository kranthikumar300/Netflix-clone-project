import MoviesList from "./MoviesList"
import {useSelector} from "react-redux"

const SecondaryContainer = () => {

    //useSelector hook to reed the movies data in movieSlice store
    const totalMoviesData = useSelector((store) => store.movies)

    return(
        <div className="bg-black w-full">
          <div className="md:-mt-40 relative z-10">
            <MoviesList title = {"Now Playing"} movies = {totalMoviesData.newMovies}/>
            <MoviesList title = {"Popular"} movies = {totalMoviesData.popularMovies}/>
            <MoviesList title = {"Trending"} movies = {totalMoviesData.upComingMovies}/>
            <MoviesList title = {"Rated Movies"} movies = {totalMoviesData.ratedMovies}/>
          </div>
        </div>
    )
}

export default SecondaryContainer