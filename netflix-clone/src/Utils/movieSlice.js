import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name : "movies",
    initialState : {
        newMovies : null,
        movietrailer : null,
        popularMovies : null,
        ratedMovies : null,
        upComingMovies : null
    },
    reducers : {
        addNewMovies : (state, action) => {
          state.newMovies = action.payload
        },
        addNewTrailer : (state, action) => {
            state.movietrailer = action.payload
        },
        addPopularMovies : (state, action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies : (state, action) => {
            state.ratedMovies = action.payload
        },
        addUpcomingMovies : (state, action) => {
            state.upComingMovies = action.payload
        }
    }
})

export const { addNewMovies, addNewTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies } = movieSlice.actions
export default movieSlice.reducer