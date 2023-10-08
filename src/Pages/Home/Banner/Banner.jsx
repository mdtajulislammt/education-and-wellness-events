import banner1 from '../../../assets/HTR084.jpeg'
import banner2 from '../../../assets/HR0835.jpeg'
import banner3 from '../../../assets/IIUEODf.png'
import backgroud from '../../../assets/SHA021.png'
import backgroud2 from '../../../assets/SHA43.png'
import backgroud3 from '../../../assets/MS425.png'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react'

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, [])
     return (
          <div>
               <div className="carousel  w-full h-[50vh] md:h-[70vh] lg:h-[90vh] ">
  <div id="slide1" className="carousel-item relative w-full bg-slate-100">
    <div className=' flex items-center justify-between lg:gap-28  mx-5 lg:mx-auto md:mx-10'>
   {/* slide 1st */}
     <div className='w-[300px] md:w-[500px] lg:w-[600px] '>
     <div data-aos="fade-up"
     data-aos-duration="1520">
          <h1 className=' md:text-3xl lg:text-5xl font-extrabold text-[#00bf73] mb-5'>We Ensure Better Education For a Better World</h1></div>
          <div data-aos="fade-up"
     data-aos-duration="1500">
          <p className=' text-xs lg:text-base'>In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telescope known as the Hubble.</p> </div>
     </div>
     
    <div className=' relative'>

    <div data-aos="fade-left"
      data-aos-anchor="#example-anchor"
     data-aos-duration="2500">

     <img src={backgroud} className=' w-full md:mt-5 lg:mt-20 absolute' alt="" />
     </div>
     <div data-aos="fade-left"
    data-aos-anchor="#example-anchor"
     data-aos-duration="2700">

     <img src={backgroud2} className=' w-full md:-ml-10 ml-4 md:mt-5 lg:mt-20 absolute' alt="" />
     </div>

     <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-duration="1000">

    <img src= {banner3} className="w-[150px] md:w-[350px] lg:mt-9 relative h-[180px] md:h-[310px] lg:h-[520px]" />
     </div>
    </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 lg:left-5 lg:right-5 right-1 -bottom-5 lg:top-1/2">
      <a href="#slide4" className="btn btn-circle ">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  {/* silde 2 */}
  <div id="slide2" className="carousel-item relative w-full bg-slate-100">
  <div className=' flex items-center justify-between gap-4 lg:gap-14 md:gap-8 mx-5   md:mx-auto'>
  <div className=' md:flex lg:flex gap-3 '>
    <img src={banner1} className="w-[70px] md:w-[150px] lg:w-[230px]   rounded-xl h-[80px] md:h-[200px] lg:h-[350px]" />
    <img src={banner2} className="w-[70px] md:w-[100px] lg:w-[230px]  rounded-xl ml-7 md:ml-0 mt-2 md:mt-14 h-[80px] md:h-[120px] lg:h-[250px]" />        
     </div>
  
     <div className='w-[300px] md:w-[400px] lg:w-[600px] relative'>
     <img src={backgroud3} className=' w-[40px] md:w-[80px] lg:w-[100px] right-1 -mt-12 lg:-mt-28 absolute' alt="" />
         <div className=' relative'>
         <h1 className=' md:text-3xl lg:text-5xl font-extrabold text-[#00bf73] mb-2 lg:mb-5'>We Ensure Better Education For a Better World</h1>
          <p className=' text-xs'>In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telescope known as the Hubble.</p>
         </div>
     </div>
    
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 lg:left-5 lg:right-5 right-1 -bottom-5 lg:top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  {/* silde 3 */}
  <div id="slide3" className="carousel-item relative w-full bg-slate-100">
  <div className=' flex items-center justify-between lg:gap-28  mx-5 lg:mx-auto md:mx-auto'>
     <div className='w-[400px] lg:w-[600px]'>
          <h1 className=' md:text-3xl lg:text-5xl font-extrabold text-[#00bf73] mb-5'>We Ensure Better Education For a Better World</h1>
          <p className=' text-xs lg:text-base'>In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telescope known as the Hubble.</p>
     </div>
    <div className=' relative'>
     <img src={backgroud} className=' w-full md:mt-5 lg:mt-20 absolute' alt="" />
     <img src={backgroud2} className=' w-full md:-ml-10 ml-4 md:mt-5 lg:mt-20 absolute' alt="" />
    <img src={banner3} className="w-[150px] lg:w-[350px]  relative  lg:h-[500px]" />
    </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 lg:left-5 lg:right-5 right-1 -bottom-4 lg:top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  {/* silde 4 */}
  <div id="slide4" className="carousel-item relative w-full bg-slate-100">
  <div className=' flex items-center justify-between gap-4 lg:gap-14 md:gap-8 mx-5   md:mx-auto'>
  <div className=' md:flex lg:flex gap-3 '>
    <img src={banner1} className="w-[70px] md:w-[150px] lg:w-[230px]   rounded-xl h-[80px] md:h-[200px] lg:h-[350px]" />
    <img src={banner2} className="w-[70px] md:w-[100px] lg:w-[230px]  rounded-xl ml-7 md:ml-0 mt-2 md:mt-14 h-[80px] md:h-[120px] lg:h-[250px]" />        
     </div>
  
     <div className='w-[300px] md:w-[400px] lg:w-[600px] relative'>
     <img src={backgroud3} className=' w-[40px] md:w-[80px] lg:w-[100px] right-1 -mt-12 lg:-mt-28 absolute' alt="" />
         <div className=' relative'>
         <h1 className=' md:text-3xl lg:text-5xl font-extrabold text-[#00bf73] mb-2 lg:mb-5'>We Ensure Better Education For a Better World</h1>
          <p className=' text-xs'>In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telescope known as the Hubble.</p>
         </div>
     </div>
    
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 lg:left-5 lg:right-5 right-1 -bottom-5 lg:top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
          </div>
     );
};

export default Banner;