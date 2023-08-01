import {createBrowserRouter} from "react-router-dom"
import Layout from "../Components/common/Layout"
import LandingPage from "../pages/LandingPage/LandingPage"
import Register from "../pages/Auth/Register"
import Register1 from "../pages/AllAuth/Projeect1/Register1"
import SignIn1 from "../pages/AllAuth/Projeect1/SignIn1"
import SignIn2 from "../pages/AllAuth/Project2/SignIn2"
import Register2 from "../pages/AllAuth/Project2/Register2"
import Signin3 from "../pages/AllAuth/Project3/Signin3"
import Register3 from "../pages/AllAuth/Project3/Register3"
import SignIn4 from "../pages/AllAuth/Project4/SignIn4"
import Register4 from "../pages/AllAuth/Project4/Register4"


export const mainRoute = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {
                index: true,
                element: <LandingPage/>
                
            }, 
            {
                path: "/register", 
                element: <Register/>

            },
            {
                path: "/register1", 
                element: <Register1/>

            },
            {
                path: "/register2", 
                element: <Register2/>

            },
            {
                path: "/register3", 
                element: <Register3/>

            },
            {
                path: "/register4", 
                element: <Register4/>

            },
            {
                path: "/siginin1", 
                element: <SignIn1/>

            },
            {
                path: "/siginin2", 
                element: <SignIn2/>

            },
            {
                path: "/siginin3", 
                element: <Signin3/>

            },
            {
                path: "/siginin4", 
                element: <SignIn4/>

            },

        ]
    }
])