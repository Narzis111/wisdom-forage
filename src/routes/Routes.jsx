import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddAssignment from "../pages/AddAssignment";
import PrivateRoutes from "./PrivateRoutes";
import AllAssignment from "../pages/AllAssignment";
import Details from "../pages/Details";
import Update from "../pages/Update";
import TakeAssignment from "../pages/TakeAssignment";
import Submit from "../pages/Submit";
import Pending from "../pages/Pending";
import Marking from "../pages/Marking";
import Contact from "../pages/Contact";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>, 
                loader:  () => fetch('https://assignment-11-server-ruby.vercel.app/assignment'),
            },
            {
                path: "/assignment/add",
                element: <PrivateRoutes><AddAssignment></AddAssignment></PrivateRoutes>
              },
              {
                path: "/assignment/all",
                element: <AllAssignment></AllAssignment>,
                loader: () => fetch(`https://assignment-11-server-ruby.vercel.app/assignment`),
              },
         
              {
                path: '/assignment/:id',
                element: <PrivateRoutes><Details></Details></PrivateRoutes>,
                
              },
              {
                path: "update/:id",
                element: <PrivateRoutes><Update></Update></PrivateRoutes>,
               
              },
              {
                path: "take/:id",
                element: <TakeAssignment></TakeAssignment>,
                
              },
              // all pending submission
              {
                path: "/pending",
                element:<PrivateRoutes><Pending></Pending></PrivateRoutes>,
                

              },
              {
                path: "/contact",
                element:<Contact></Contact>,
                

              },
              {
                // my submission
                path: "submit",
                element:<PrivateRoutes><Submit></Submit></PrivateRoutes>,
             
              },
              {
                // marking page
                path: "marking/:id",
                element:<Marking></Marking>,
                          
              },
  

            {
                path: "login",
                element: <Login></Login> 
            },
            {
                path: "register",
                element: <Register></Register> 
            },
        ]
    },
]);
export default router;