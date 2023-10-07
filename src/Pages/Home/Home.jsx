import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import NavBar from "./NavBar/NavBar";
import Services from "./Services/Services";


const Home = () => {
     const services = useLoaderData()
     return (
          <div>
               <Banner></Banner>
               <Services services={services}></Services>
               
               
          </div>
     );
};

export default Home;