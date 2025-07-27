// In your router configuration file
import { createBrowserRouter } from "react-router";
import Homelayouts from "../Layouts/Homelayouts";
import Home from "../Components/Home";
import Create from "../Components/Create";
import Update from "../Components/Update";

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
                path: 'update',
                element: <Update />
            }
        ]
    }
]);