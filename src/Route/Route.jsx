import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import ServiceDetail from "../Pages/Home/Services/ServiceDetail";
import Services from "../Pages/Home/Services/Services";
import Errorpage from "../ErrorPage/Errorpage";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import PrivedRoute from "../PrivedRoute/PrivedRoute";
import Service from "../Pages/Home/NavBar/Service/Service";
import FestivalGallery from "../Pages/Home/FestivalGallery/FestivalGallery";
import Gallery from "../Pages/Gallery/Gallery";




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
                path: "/service/:id",
                 element: <PrivedRoute><ServiceDetail></ServiceDetail></PrivedRoute>,
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
           
              {
               path:'/service',
               element:<PrivedRoute><Service></Service></PrivedRoute>,
               loader:()=>fetch('/services.json'),
              },
              {
               path:'/gallery',
               element:<PrivedRoute><Gallery></Gallery></PrivedRoute>
              },
           ]
           },
          ])
          export default router
