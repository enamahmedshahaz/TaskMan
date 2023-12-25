import {
    createBrowserRouter,
} from "react-router-dom";

import Home from "../pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/DashBoard";
import ManageTasks from "../pages/DashBoard/ManageTasks/ManageTasks";
import AddTask from "../pages/DashBoard/AddTask/AddTask";
import EditTask from "../pages/DashBoard/EditTask/EditTask";

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
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        ],
    },

    {
        path: "dashboard",
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                path: "manageTasks",
                element: <ManageTasks></ManageTasks>
            },
            {
                path: "addTask",
                element: <AddTask></AddTask>,
            },
            {
                path: "editTask/:id",
                element: <EditTask></EditTask>,
                // loader: ({ params }) => fetch(`http://localhost:5000/tasks/${params.id}`),
                loader: ({ params }) => fetch(`https://taskman-server-delta.vercel.app/tasks/${params.id}`),
            },
        ],
    },

]);
