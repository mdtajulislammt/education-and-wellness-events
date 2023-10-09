import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import OurTeachers from "./OurTeachers/OurTeachers";
import FestivalGallery from "./FestivalGallery/FestivalGallery";


const Home = () => {
     const services = useLoaderData()
     return (
          <div>
               <Banner></Banner>
               <Services services={services}></Services>
               <OurTeachers></OurTeachers>
               <FestivalGallery></FestivalGallery>
               
               
          </div>
     );
};

export default Home;