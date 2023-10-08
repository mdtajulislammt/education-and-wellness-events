import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "flowbite-react";


const PrivedRoute = ({children}) => {
     const {user,loading} = useContext(AuthContext)
     const location = useLocation()
     
      
     if(loading){
          
          return <div className="text-center  h-[550px] mt-64"><span className="loading loading-spinner loading-lg"></span></div>
          
     }

     if(user){
          return children ;
     }

     return <Navigate state={location} to='/login'></Navigate>
};

export default PrivedRoute;