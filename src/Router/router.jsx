import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Register from '../Pages/Register/Register'
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn/SignIn";
import Details from "../Pages/HotJobs/Details";
import PrivateRoutes from "../Routes/PrivateRoutes";
import JobApply from "../Pages/HotJobs/JobApply";

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
                path:"jobs/:id",
                Component:Details,
                loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path:"jobApply/:id",
                element:<PrivateRoutes><JobApply/></PrivateRoutes>
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