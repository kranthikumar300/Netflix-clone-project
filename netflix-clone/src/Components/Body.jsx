import LoginPage from "./LoginPage"
import Home from "./Home"
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const Body = ()  => {

    const route = createBrowserRouter([

        {
            path : "/",
            element : <LoginPage/>
        },
        {
            path : "/home",
            element : <Home/>
        }
    ])

    return(
        <RouterProvider router = {route}/>
    )
}

export default Body