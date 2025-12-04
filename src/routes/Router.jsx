import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import PlantsLayout from "../layouts/PlantsLayout";
import Login from "../pages/Login";

import AuthLayout from "../layouts/AuthLayout";
import SignUp from "../pages/SignUp";
import MyProfileLayout from "../layouts/MyProfileLayout"
import ViewDetails from "../pages/ViewDetails";
import Home from "../pages/Home";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Loading";






const router = createBrowserRouter(
    [
        {
            path:"/",
            element: <HomeLayout></HomeLayout>,
            
            children:[
                {
                    path:"/",
                    element:<Home></Home>
                },
                {
                    path:"/details/:id",
                    element: <ViewDetails></ViewDetails>,
                   loader: ()=> fetch("/plants.json"),
                   hydrateFallbackElement: <Loading></Loading>
           
                },
            ]
        },
        {
            path:"/auth",
            element: <AuthLayout></AuthLayout>,
            children:[
                {
                    path:"/auth/login",
                    element: <Login></Login>,
                },
                {
                    path:"/auth/signup",
                    element: <SignUp></SignUp>,
                },
            ]
        },
        {
            path:"/plants/:plantId",
            element: <PrivateRoute>
                <PlantsLayout></PlantsLayout>
            </PrivateRoute>,
            loader: ()=> fetch("/plants.json"),
             hydrateFallbackElement: <Loading></Loading>
            
           
        },
        {
            path:"/profile",
            element:<PrivateRoute>
                 <MyProfileLayout></MyProfileLayout>
            </PrivateRoute>,
        },
        {
            path:"/*",
            element: <h2>Error-404</h2>
        },
    ]
);
export default router;