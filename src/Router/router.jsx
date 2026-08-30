import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Register from '../Pages/Register/Register'
import Home from "../Pages/Home";

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
                path:'/register',
                Component:Register  
            }
        ]
    }
])