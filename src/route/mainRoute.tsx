import {createBrowserRouter} from "react-router-dom"
import Layout from "../Components/common/Layout"
import LandingPage from "../pages/LandingPage/LandingPage"
import Register from "../pages/Auth/Register"
import Signin from "../pages/Auth/Signin"
import Register1 from "../pages/AllAuth/Projeect1/Register1"
import SignIn1 from "../pages/AllAuth/Projeect1/SignIn1"
import SignIn2 from "../pages/AllAuth/Project2/SignIn2"
import Register2 from "../pages/AllAuth/Project2/Register2"
import Signin3 from "../pages/AllAuth/Project3/Signin3"
import Register3 from "../pages/AllAuth/Project3/Register3"
import SignIn4 from "../pages/AllAuth/Project4/SignIn4"
import Register4 from "../pages/AllAuth/Project4/Register4"
import Signin5 from "../pages/AllAuth/Project5/Signin5"
import Register5 from "../pages/AllAuth/Project5/Register5"
import Register6 from "../pages/AllAuth/Project6/Register6"
import SignIn6 from "../pages/AllAuth/Project6/SignIn6"
import PrivateRoute from "./PrivateRoute"


export const mainRoute = createBrowserRouter([

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
        path: "/register5", 
        element: <Register5/>

    },
    {
        path: "/register6", 
        element: <Register6/>

    },
    {
        path: "/siginin", 
        element: <Signin/>

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
    {
        path: "/siginin5", 
        element: <Signin5/>

    },
    {
        path: "/siginin6", 
        element: <SignIn6/>

    },
    {
        path: "/",
        element: 
        <PrivateRoute>
        <Layout/>
        </PrivateRoute>,
        children:[
            {
                index: true,
                element: <LandingPage/>
                
            }, 
           

        ]
    }
])