import useGetMovies from "../CustomHooks/useGetMovies"
import usePopularMovies from "../CustomHooks/usePopularMovies"
import useRatedMovies from "../CustomHooks/useRatedMovies"
import useUpcomingMovies from "../CustomHooks/useUpcomingMovies"
import Footer from "./Footer"
import Header from "./Header"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"


const Home = () => {


    //Custom Hooks
    useGetMovies()
    usePopularMovies()
    useRatedMovies()
    useUpcomingMovies()

    return(
        <div>    
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
        <Footer/>
        </div>
    )
}

export default Home