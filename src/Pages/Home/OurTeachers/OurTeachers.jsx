import { FaGraduationCap } from 'react-icons/fa';
import teacher1 from '../../../../src/assets/teacher-1.jpg'
import teacher2 from '../../../../src/assets/teacher-2.jpg'
import teacher3 from '../../../../src/assets/teacher-3.jpg'
import teacher4 from '../../../../src/assets/teacher-4.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const OurTeachers = () => {
     useEffect(() => {
          AOS.init();
        }, [])
     return (
          <div className='mx-7 md:mx-10 lg:mx-20  mt-20'>
               <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="500">
               <div className=' mt-7 text-center'>
               <h2 className=' text-2xl md:text-4xl font-semibold'>Our Teacher</h2>
               <p className='text-sm'>Take a look at the entire list of experts</p>
               </div>
               

               <div className=' flex items-center gap-2 justify-center'>
                    <div className=' w-16  border-b-2  border-[#00bf73]'></div>
                    <FaGraduationCap className=' text-2xl text-[#00bf73]'/>
                    <div className=' w-16  border-b-2  border-[#00bf73]'></div>
                    
               </div>
               </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16'>
               {/* 1st card */}
               <div data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="800">
               <div className="">
                    <img className=" rounded-t-md md:h-[200px]" src={teacher1} alt=""/>
                    <div className=" bg-[#00bf73] text-white rounded-b-md p-2 border-l-2 border-r-2 border-b-2 border-[#00bf73] fadeIn-bottom">
                    <h3 className="text-xl font-semibold my-3">Chakmu Mack</h3>
                    <p className="">This expert has an extensive list of achievements along all the years.</p>
                    </div>

               </div>
               </div>

               {/* 2nd card */}
               <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="800">
               <div className="">
                    <img className=" rounded-t-md md:h-[200px]" src={teacher2} alt=""/>
                    <div className=" bg-[#00bf73] text-white rounded-b-md p-2 border-l-2 border-r-2 border-b-2 border-[#00bf73] fadeIn-bottom">
                    <h3 className="text-xl font-semibold my-3">Shalo kaich</h3>
                    <p className="">This expert has an extensive list of achievements along all the years.</p>
                    </div>

               </div>
               </div>

               
               {/* 3rd card */}
               <div data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="800">
               <div className="">
                    <img className=" rounded-t-md  md:h-[200px]" src={teacher3} alt=""/>
                    <div className=" bg-[#00bf73] text-white rounded-b-md p-2 border-l-2 border-r-2 border-b-2 border-[#00bf73] fadeIn-bottom">
                    <h3 className="text-xl font-semibold my-3">Bill Host</h3>
                    <p className="">This expert has an extensive list of achievements along all the years.</p>
                    </div>

               </div></div>
               {/* 4th card */}
               <div data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="800">
               <div className="">
                    <img className=" rounded-t-md md:h-[200px]" src={teacher4} alt=""/>
                    <div className=" bg-[#00bf73] text-white rounded-b-md p-2 border-l-2 border-r-2 border-b-2 border-[#00bf73] fadeIn-bottom">
                    <h3 className="text-xl font-semibold my-3">Chaiku Mainye</h3>
                    <p className="">This expert has an extensive list of achievements along all the years.</p>
                    </div>
                    </div>

               </div>
              </div>
              
          </div>
     );
};

export default OurTeachers;