import MoviesCards from "./MoviesCards"


const MoviesList = ({title, movies}) => {
    

  return (
    <div className="p-4">
        <h1 className="font-bold text-3xl py-5 text-white">{title}</h1>
        <div className="flex overflow-x-scroll scrollbar-hide scroll-smooth">
            <div className="flex whitespace-nowrap gap-x-5">
            {/*map inside the ternary operator */}
            {movies && movies.length > 0 ?
            (movies.map((movie) => <MoviesCards key={movie.id} posterPath={movie.poster_path}/>)  
            ) : <p>Movies Not Available</p>}
        </div>
        </div>
    </div>
  )
}

export default MoviesList
