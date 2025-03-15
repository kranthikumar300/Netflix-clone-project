import { posterLinkCDN } from "../Utils/constants"

const MoviesCards = ({ posterPath }) => {
  return (
    <div className="w-36 md:w-48 lg:w-56">
      <img 
      src = {posterLinkCDN + posterPath} alt="Movie Poster" />
    </div>
  )
}

export default MoviesCards
