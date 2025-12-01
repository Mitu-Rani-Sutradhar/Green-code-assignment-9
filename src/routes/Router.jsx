import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import PlantsLayout from "../layouts/PlantsLayout";


const router = createBrowserRouter(
    [
        {
            path:"/",
            element: <HomeLayout></HomeLayout>,
           
        },
        {
            path:"/auth",
            element: <h2>Authentication Layout</h2>
        },
        {
            path:"/plants",
            element: <PlantsLayout></PlantsLayout>
        },
        {
            path:"/profile",
            element: <h2>My profile Layout</h2>
        },
        {
            path:"/*",
            element: <h2>Error-404</h2>
        },
    ]
);
export default router;