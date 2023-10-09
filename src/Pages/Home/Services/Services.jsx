import { useEffect } from 'react';
// import servicesman from '../../../assets/b2.jpg'
import ServiceDetails from './ServiceDetails';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGraduationCap } from 'react-icons/fa';

const Services = ({services}) => {
     
     useEffect(() => {
          AOS.init();
        }, [])
     return (
          <div className=' mx-8 md:mx-10 lg:mx-20 '>
               <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="500">
               <div className=' mt-7 text-center'>
               <h2 className=' text-2xl md:text-4xl font-semibold'>Our Services</h2>
               <p className='text-sm'>Our best services for you</p>
               </div>
               

               <div className=' flex items-center gap-2 justify-center'>
                    <div className=' w-16  border-b-2  border-[#00bf73]'></div>
                    <FaGraduationCap className=' text-2xl text-[#00bf73]'/>
                    <div className=' w-16  border-b-2  border-[#00bf73]'></div>
                    
               </div>
               </div>
               <div className='grid grid-cols- gap-8 mt-8'>
                    <div data-aos="fade-up"
                    data-aos-duration="2000">
                    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 '>
                        {
                         services.map((service, index) => <ServiceDetails key={index} service={service}></ServiceDetails>)
                        } 
                        
                    </div>
                    </div>

               </div>
          </div>
     );
};

export default Services;