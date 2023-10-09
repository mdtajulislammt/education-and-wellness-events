import { Link, useLoaderData } from "react-router-dom";
import Services from "../../Services/Services";


const Service = () => {
     const services = useLoaderData()
     return (
          <div>
          
               <Services services={services}></Services>
          </div>
     );
};

export default Service;