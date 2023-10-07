import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import ServiceDetail from "../Pages/Home/Services/ServiceDetail";
import Services from "../Pages/Home/Services/Services";
import Errorpage from "../ErrorPage/Errorpage";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";




   const router = createBrowserRouter([
          {
          path: "/",
           element: <MainLayOut></MainLayOut>,
           errorElement:<Errorpage></Errorpage>,
           children:[
               {
                    path: "/",
                     element: <Home></Home>,
                     loader:()=>fetch('/services.json'),
                     
               },
               {
                path: "/services",
                element:<Services></Services>
               },
              {
                path: "/services/:id",
                 element: <ServiceDetail></ServiceDetail>,
                 loader:()=>fetch('/services.json'),
              },
              {
               path:'/login',
               element:<LogIn></LogIn>
              },
              {
               path:'/register',
               element:<Register></Register>
              },
           ]
           },
          ])
          export default router
