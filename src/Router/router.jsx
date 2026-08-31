import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Register from '../Pages/Register/Register'
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn/SignIn";

 export const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'register',
                Component:Register  
            },
            {
                path:'signIn',
                Component:SignIn
            }
        ]
    }
])