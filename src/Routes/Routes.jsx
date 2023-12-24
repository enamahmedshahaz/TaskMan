import {
    createBrowserRouter,
} from "react-router-dom";

import Home from "../pages/Home/Home";
import Tasks from "../pages/Tasks/Tasks";

import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/tasks",
                element: <PrivateRoutes><Tasks></Tasks></PrivateRoutes>,
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        ],
    },
]);
