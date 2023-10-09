import { FaGraduationCap } from "react-icons/fa";
import gallery1 from '../../../assets/gallery1.jpeg'
import gallery2 from '../../../assets/gallery2.jpeg'
import gallery3 from '../../../assets/gallery3.jpeg'
import gallery4 from '../../../assets/gallery4.jpeg'
import gallery5 from '../../../assets/gallery5.jpg'
import gallery6 from '../../../assets/gallery6.jpg'
import gallery7 from '../../../assets/gallery7.jpg'
import gallery8 from '../../../assets/gallery8.jpg'
import gallery9 from '../../../assets/gallery9.jpg'
import Marquee from "react-fast-marquee";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

const FestivalGallery = () => {
     useEffect(() => {
          AOS.init();
        }, [])
     return (
          <div className="mt-10">
              <div data-aos="fade-down"
                    data-aos-duration="500">
               <div className=' mt-7 text-center'>
               <h2 className=' text-2xl md:text-4xl font-semibold text-black'>Festival Gallery</h2>
               <p className='text-sm text-black'>Our best services for you</p>
               </div>
               

               <div className=' flex items-center gap-2 justify-center'>
                    <div className=' w-16  border-b-2  border-[#00bf73]'></div>
                    <FaGraduationCap className=' text-2xl text-[#00bf73]'/>
                    <div className=' w-16  border-b-2  border-[#00bf73]'></div>
                    
               </div>
               </div>
               <div className="mt-5">
               <div data-aos="fade-up"
                    data-aos-duration="1000">
               <Marquee direction="right" speed='30'>
               <div className=" flex items-center w-[150px] md:w-[300px] h-[100px] md:h-[150px] lg:h-[250px] ">
                    <img className="h-full "  src={gallery1} alt="" />
                    <img className="h-full " src={gallery2} alt="" />
                     <img className="h-full " src={gallery3} alt="" />
                    <img className="h-full " src={gallery4} alt="" />
                    <img className="h-full " src={gallery5} alt="" />
                   
               </div>
               </Marquee>
               </div>
               <div data-aos="fade-up"
                    data-aos-duration="1000">
               <Marquee direction="left" speed='30'>
               <div className=" flex items-center w-[150px] md:w-[300px] h-[100px] md:h-[150px] lg:h-[250px] ">
                    <img className="h-full " src={gallery6} alt="" />
                    <img className="h-full " src={gallery2} alt="" />
                    <img className="h-full " src={gallery7} alt="" />
                    <img className="h-full " src={gallery8} alt="" />
                    <img className="h-full " src={gallery9} alt="" />
                   
               </div>
               </Marquee>
               </div>
               </div>
          </div>
     );
};

export default FestivalGallery;