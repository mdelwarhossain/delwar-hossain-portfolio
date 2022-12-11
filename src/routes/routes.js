import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Homes from "../Pages/Home/Homes";
import ProjectDetails from "../Pages/Projects/ProjectDetails";
import Projects from "../Pages/Projects/Projects";

const router = createBrowserRouter([
    {
        path: '/', 
        element: <Main></Main>, 
        children: [
            {
                path: '/', 
                element: <Homes></Homes>
            },
            {
                path: '/#portfolio', 
                element: <Projects></Projects>
            },
            {
                path: '/project/:id', 
                element: <ProjectDetails></ProjectDetails>,
            }
        ]
    }
])

export default router; 