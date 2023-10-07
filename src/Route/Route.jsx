import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import ServiceDetail from "../Pages/Home/Services/ServiceDetail";
import Services from "../Pages/Home/Services/Services";




   const router = createBrowserRouter([
          {
          path: "/",
           element: <MainLayOut></MainLayOut>,
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
              }
           ]
           },
          ])
          export default router
