import { posterLinkCDN } from "../Utils/constants"
import {motion} from "framer-motion"

const MoviesCards = ({ posterPath }) => {
  return (
    <motion.div
     whileHover = {{scale : 0.95}}
     className="w-36 md:w-48 lg:w-56">
      <img
      className="cursor-pointer"
      src = {posterLinkCDN + posterPath} alt="Movie Poster" />
    </motion.div>
  )
}

export default MoviesCards
