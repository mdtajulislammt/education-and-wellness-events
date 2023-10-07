import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import {MdEmail } from "react-icons/md";
import {RiLockPasswordFill} from "react-icons/ri";
import { Link } from "react-router-dom";


const LogIn = () => {
  const [showPassword,setShowPassword] = useState(false)
     return (
          <div>
              <div className=" text-black text-center rounded-xl border border-[#00bf73] w-[500px] p-5 mx-auto mt-8 mb-16">
      <h2 className=" text-5xl text-[#00bf73] font-semibold my-10">Login </h2>
      <form  className=" mx-auto ">
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
          <div className="  flex items-center border border-[#00bf73] px-3 rounded-lg">
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
          <div className=" relative  flex items-center border border-[#00bf73] px-3 rounded-lg">
          <span className=" text-[#00bf73]"><RiLockPasswordFill/></span>
          <input
            type={showPassword?"text":"password"}
           
            placeholder="Enter your password"
            className=" p-3 w-full  focus:outline-none"
            name="password"
            required
          />
          <span className=" absolute right-3  cursor-pointer text-xl text-[#00bf73]" onClick={()=>setShowPassword(!showPassword)}>{showPassword ?<AiFillEye/> :<AiFillEyeInvisible/>}</span>
          </div>
          <label className="label">
            <a  href="#" className="label-text-alt link link-hover text-[#00bf73]">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="p-3 rounded-md text-white bg-[#00bf73] font-semibold">Login</button>
        </div>
        <p className=" text-base font-semibold mt-5">Do not Have An Account ?  <Link to={'/register'} className=" text-[#00bf73] ">Register </Link></p>
      </form>
      </div>  
          </div>
     );
};

export default LogIn;