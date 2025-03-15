import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"
import {useSelector} from "react-redux"


const MainContainer = () => {

    //useSelector Hook
    const movies = useSelector((store) => store.movies?.newMovies)
    
    //if the movies state - 0 then return here don't go ahead 
    if(!movies) return;

    //Selecting first movie
    const mainMovie = movies[0]

    //API Data from TMDB
    const {original_title, overview, id} = mainMovie

  return (
    <div className="bg-black">
      <VideoTitle originalTitle = {original_title} overview = {overview}/>
      <VideoBackground movieId = {id}/>
    </div>
  )
}

export default MainContainer
