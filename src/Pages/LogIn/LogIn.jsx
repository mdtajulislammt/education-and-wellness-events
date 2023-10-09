import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useContext, useState } from "react";
import {MdEmail } from "react-icons/md";
import {RiLockPasswordFill} from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BiLogoFacebook, BiLogoGithub } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";



const LogIn = () => {
  const [showPassword,setShowPassword] = useState(false)
  const {logIn,user,signInWithGoogle} = useContext(AuthContext)
   const navigate = useNavigate()
     const location = useLocation()
 


  // login setup
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value ;
    const password = e.target.password.value ;
    console.log(email,password);

    logIn(email, password)
    .then(res => {
      toast.success('Successfully LogIn!')
      console.log(res.user)
      setTimeout(()=>{navigate(location?.state ? location.state : '/')},1000)
    })
    .catch(err => {
      console.log(err.message)
        toast.error("Login Failed: " + err.code);
      
    });
   }
     //google account login setup
  const handleGoogleLogIn =() => {
    signInWithGoogle()
    .then(res=>{
      console.log(res.user);
      toast.success('Successfully Google Register!')
      setTimeout(()=>{navigate(location?.state ? location.state : '/')},1000)
      
    })
    .catch(err =>{
      console.log(err.message)
      toast.error('Invalid Registration Credentials')
    })
  
  }

     return (
          <div>
              <div className=" text-black text-center rounded-xl border border-[#00bf73] w-[370px] md:w-[500px] p-5 mx-auto mt-8 mb-16">
      <h2 className=" text-5xl text-[#00bf73] font-semibold my-10">Login </h2>
      <form onSubmit={handleLogIn} className=" mx-auto ">
        <div className="form-control">
         
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
            <span className="label-text  font-semibold text-[#00bf73] ">Password</span>
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
          <button className="p-3 rounded-md text-white bg-[#00bf73] font-semibold hover:text-black">Login</button>
        </div>
        <div className=' flex items-center gap-2 justify-center mt-5'>
                    <div className=' w-16  border-b-2  border-[#00bf73]'></div>
                    <p>or</p>
                    <div className=' w-16  border-b-2  border-[#00bf73]'></div>
                    
               </div>
        <div className=" md:ml-10 ">
               
               <Link><button className=" flex bg-[#00bf7331] hover:bg-white w-80 md:w-96 my-3 items-center gap-2 p-2 px-16 md:px-20 rounded-lg  font-medium border border-[#00bf73] justify-center block"><BiLogoGithub/> <span className="text-[#00bf73] hover:text-black ">Sign up with GitHub</span></button></Link>

               <Link><button onClick={handleGoogleLogIn} className=" flex bg-[#00bf7331] hover:bg-white  w-80 md:w-96 my-3 items-center gap-2 p-2 px-16 md:px-20 rounded-lg  font-medium border   border-[#00bf73] justify-center block"><FcGoogle /> <span className="text-[#00bf73] hover:text-black">Sign up with Google</span></button></Link>

               <Link><button className=" flex bg-[#00bf7331] hover:bg-white w-80 md:w-96 my-3 items-center gap-1 p-2 px-14 md:px-20 rounded-lg  font-medium border   border-[#00bf73] justify-center block"><BiLogoFacebook/> <span className="text-[#00bf73] hover:text-black">Sign up with Facebook</span></button></Link>
              </div>
        <p className=" text-base font-semibold mt-5">Do not Have An Account ?  <Link to={'/register'} className=" text-[#00bf73] ">Register </Link></p>
      </form>
      </div>  
      <ToastContainer></ToastContainer>
          </div>
     );
};

export default LogIn;