// In your router configuration file
import { createBrowserRouter } from "react-router";
import Homelayouts from "../Layouts/Homelayouts";
import Home from "../Components/Home";
import Create from "../Components/Create";
import Update from "../Components/Update";
import AuthenticationLayouts from "../Layouts/AuthenticationLayouts";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Homelayouts />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'create',
                element: <Create />
            },
            {
                path: 'update/:id',
                element: <Update />
            }
        ]
    },
    {
        path:'/auth',
        Component:AuthenticationLayouts,
        children:[
            {
                path:'/auth/login',
                Component:SignIn
            },
            {
                path:'/auth/register',
                Component:SignUp,
            }
        ]
    }
]);