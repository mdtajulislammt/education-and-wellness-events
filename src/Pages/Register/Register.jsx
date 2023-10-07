import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BiSolidUser,BiSolidPhotoAlbum,BiLogoFacebook,BiLogoGithub} from "react-icons/bi";
import {FcGoogle} from "react-icons/fc";
import { useState } from "react";
import {MdEmail } from "react-icons/md";
import {RiLockPasswordFill} from "react-icons/ri";
import { Link } from "react-router-dom";


const Register = () => {
  const [showPassword,setShowPassword] = useState(false)
     return (
          <div>
              <div className=" text-black text-center rounded-xl  border border-[#00bf73] w-[500px] p-5 mx-auto mt-8 mb-16">
      <h2 className=" text-5xl text-[#00bf73] font-semibold my-10 ">Register </h2>
      <form  className=" mx-auto ">
        <div className="form-control">
          <label className="label">
               
            <span className="label-text font-semibold text-[#00bf73]">Your Name</span>
          </label>
          <div className=" flex items-center border border-[#00bf73] px-3 rounded-lg">
          <span className=" text-[#00bf73]"><BiSolidUser/></span>
          <input
            type="text"
           
            placeholder="Enter your Full Name"
            className=" p-3 w-full  focus:outline-none"
            name="name"
            required
          />
          </div>
        </div>
        <div className="form-control">
        <label className="label">  
          <span className="label-text font-semibold text-[#00bf73]">Photo URL</span>
             </label>
             <div className=" flex items-center border border-[#00bf73] px-3 rounded-lg">
             <span className=" text-[#00bf73]"><BiSolidPhotoAlbum/></span>
             <input
               type="text"
              
               placeholder="Enter your Photo URL"
               className=" p-3 w-full  focus:outline-none "
               name="img"
               required
             />
             </div>
        </div>
        <div className="form-control">
          {/* {
            loginErr &&
            <p className="text-red-500 text-sm">
              {loginErr}
            </p>
          }
          {
            loginSuccess &&
        
            <p className="text-green-500 text-sm">
              {loginSuccess}
            </p>
          } */}
          <label className="label">
               
            <span className="label-text font-semibold text-[#00bf73]">Email</span>
          </label>
          <div className=" flex items-center border border-[#00bf73] px-3 rounded-lg">
          <span className=" text-[#00bf73]"><MdEmail/></span>
          <input
            type="email"
           
            placeholder="Enter your email address"
            className=" p-3 w-full  focus:outline-none"
            name="email"
            required
          />
          </div>
        </div>
        <div className="form-control">
        <label className="label">
            <span className="label-text  font-semibold text-[#00bf73]">Password</span>
          </label>
          <div className=" relative flex items-center border border-[#00bf73] px-3 rounded-lg">
          <span className=" text-[#00bf73]"><RiLockPasswordFill/></span>
          <input
            type={showPassword?"text":"password"}
           
            placeholder="Enter your password"
            className=" p-3 w-full   focus:outline-none"
            name="password"
            required
          />
          <span className=" absolute right-3  cursor-pointer text-xl text-[#00bf73]" onClick={()=>setShowPassword(!showPassword)}>{showPassword ?<AiFillEye/> :<AiFillEyeInvisible/>}</span>
          </div>
          <label className="label">
          
      <div className="flex items-center">
          <input id="link-checkbox" type="checkbox" value="" className="w-3 h-4 text-[#00bf73] focus:outline-none" />
          <label htmlFor="link-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-[#00bf73] 
          dark:text-[#00bf73] hover:underline ">terms and conditions</a>.</label>
      </div>

          </label>
        </div>
        <div className="form-control mt-6">
          <button className="p-3 rounded-md font-semibold text-white hover:text-black bg-[#00bf73]">Register</button>
        </div>
        <div className=' flex items-center gap-2 justify-center'>
                    <div className=' w-16  border-b-2  border-[#00bf73]'></div>
                    <p>or</p>
                    <div className=' w-16  border-b-2  border-[#00bf73]'></div>
                    
               </div>
               <div className=" ml-10 ">
               
               <Link><button className=" flex bg-[#00bf7331] hover:bg-white md:w-96 my-3 items-center gap-2 p-2 px-20 rounded-lg  font-medium border border-[#00bf73] justify-center block"><BiLogoGithub/> <span className="text-[#00bf73] hover:text-black ">Sign up with GitHub</span></button></Link>

               <Link><button className=" flex bg-[#00bf7331] hover:bg-white md:w-96 my-3 items-center gap-2 p-2 px-20 rounded-lg  font-medium border   border-[#00bf73] justify-center block"><FcGoogle /> <span className="text-[#00bf73] hover:text-black">Sign up with Google</span></button></Link>
               
               <Link><button className=" flex bg-[#00bf7331] hover:bg-white md:w-96 my-3 items-center gap-2 p-2 px-20 rounded-lg text-[#00bf73] font-medium border   border-[#00bf73] justify-center block"><BiLogoFacebook/> <span className="text-[#00bf73] hover:text-black">Sign up with Facebook</span></button></Link>
              </div>
               
               
        <p className=" text-base font-semibold mt-5">Are you already account ?  <Link to={'/login'} className=" text-[#00bf73] ">LogIn </Link></p>
      </form>
      </div>  
          </div>
     );
};

export default Register;

