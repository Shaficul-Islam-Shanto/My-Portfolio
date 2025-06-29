import {
  createBrowserRouter,
} from "react-router";
import RouteLayout from "../RouteLayout/RouteLayout";
import Home from "../components/Home/Home";
import About from "../pages/About/About";
import ProjectDetails from "../components/Projects/ProjectDetails";
import Contact from "../components/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout></RouteLayout>,
    children: [
        {
            index: true,
            element: <Home></Home>
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        },
        {
            path: '/projects/:id',
            element: <ProjectDetails></ProjectDetails>
        }
       

    ]
  },
]);

export default router;