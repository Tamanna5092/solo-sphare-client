import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import JobDetails from "../pages/JobDetails";
import AddJob from "../pages/AddJob";
import ErrorPage from "../pages/ErrorPage";
import MyPostedJobs from "../pages/MyPostedJobs";
import UpdateJob from "../pages/UpdateJob";
import PrivateRoute from "./PrivateRoute";
import MyBids from "../pages/MyBids";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Register></Register>
            },
            {
                path: '/job/:id',
                element: <PrivateRoute></PrivateRoute>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
            {
                path: '/addJob',
                element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
            },
            {
                path: '/myPostedJobs',
                element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><UpdateJob></UpdateJob></PrivateRoute>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
            {
                path: '/myBids',
                element: <PrivateRoute><MyBids></MyBids></PrivateRoute>
            }
        ]
    }
])

export default router;