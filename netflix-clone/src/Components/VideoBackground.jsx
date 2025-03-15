
import { useSelector } from "react-redux"
import useMovieTrailer from "../CustomHooks/useMovieTrailer"


const VideoBackground = ({ movieId }) => {

   const MainTrailerVideo = useSelector((store) => store.movies.movietrailer)

   useMovieTrailer(movieId)

    return (
      <div>
        {/*Youtube video embeded code */}
         <div className="w-full aspect-video md:h-[80vh] lg:h-screen">
         <iframe
        className="w-full h-full xs" 
        src={`https://www.youtube.com/embed/${MainTrailerVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${MainTrailerVideo?.key}`}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen>
        </iframe>
         </div>
      </div>
    )
}

export default VideoBackground
