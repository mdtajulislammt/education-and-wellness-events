import { Link, NavLink } from "react-router-dom";
import { CiUser } from 'react-icons/ci';
import { AiOutlineSetting ,AiOutlineLogout} from 'react-icons/ai';
import { MdOutlineDashboardCustomize,MdNotificationsActive } from 'react-icons/md';
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useContext } from "react";

const NavBar = () => {
  const {user,logOut} = useContext(AuthContext)
  console.log(user);
   const handleLogOut = ()=>{
    logOut()
   }
 
     const links = <>
     <li><NavLink to='/'  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-[#00bf73] bg-[#00bf732b] hover:bg-[#00bf732b]  underline font-semibold" : "font-semibold "
              }>Home</NavLink></li>
             {
      user && <li><NavLink to='/service'  className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? " text-[#00bf73] bg-[#00bf732b] hover:bg-[#00bf732b]  underline font-semibold" : "font-semibold"
    }>Service</NavLink></li>
     }

     <li><NavLink to='/contact'  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-[#00bf73] bg-[#00bf732b] hover:bg-[#00bf732b]  underline font-semibold" : "font-semibold"
              }>Contact</NavLink></li>

    {
      user && <li><NavLink to='/gallery'  className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? " text-[#00bf73] bg-[#00bf732b] hover:bg-[#00bf732b]  underline font-semibold" : "font-semibold"
    }>Gallery</NavLink></li>
     }
     <li><NavLink to='/about'  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-[#00bf73] bg-[#00bf732b] hover:bg-[#00bf732b]  underline font-semibold" : "font-semibold"
              }>About</NavLink></li>

     
     
        
     </>
     return (
          <div className="mx-3 md:mx-14 lg:mx-20 ">
               <div className="navbar bg-base-100 rounded-xl ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content left-0 h-52 mt-3 w-52 z-[1] p-3 shadow  border-2 border-[#00bf73]  bg-slate-100  rounded-lg ">
        {links}
       
      </ul>
    </div>
    <Link href="/" className=" normal-case text-xl lg:mb-2  md:text-4xl ">Acade<span className=" text-3xl md:text-4xl lg:text-5xl mb-1.5 md:mb-2 font-extrabold text-[#00bf73]">mie</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-2">
    {links}  
    </ul>
  </div>
  <div className="navbar-end text-sm font-medium "> 

    {
      user ?  <div className="dropdown">
      <label tabIndex={0} className="  ">
        {
          user.photoURL? <img src={user.photoURL} className="rounded-full border-2 border-[#00bf73] h-10 w-10" /> : <CiUser className=" cursor-pointer border-2 border-[#00bf73] text-black bg-slate-300 p-1 w-10 h-10 rounded-full"/>
        }
      
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content right-0 h-72 mt-5 w-52 z-[1] p-3 shadow  border-2 border-[#00bf73]  bg-slate-100  rounded-lg">
      {
          user.photoURL? <img src={user.photoURL} className="rounded-full border-2 border-[#00bf73] mx-auto h-10 w-10" /> : <CiUser className=" cursor-pointer text-black bg-slate-300 p-1 w-10 h-10 mx-auto rounded-full"/>
        }
      <h2 className=" text-center text-lg font-semibold mt-2">{user.displayName}</h2>
      <button className=" bg-[#00bf73] p-1 rounded-lg text-white my-2">View Profile</button>
      <div className=" border-t-2">
        <h2 className=" flex items-center gap-2 my-3 cursor-pointer text-black"><MdOutlineDashboardCustomize/> <span className="  hover:text-[#00bf73]">Dashboard</span></h2>
        <h2 className=" flex items-center gap-2 my-3 cursor-pointer text-black"><MdNotificationsActive/> <span className="  hover:text-[#00bf73]">Notifications</span></h2>
        <h2 className=" flex items-center gap-2 my-3 cursor-pointer text-black"><AiOutlineSetting/> <span className="  hover:text-[#00bf73]">User Settings</span></h2>
       <button onClick={handleLogOut} className=" flex items-center gap-2 my-2 cursor-pointer text-black"><AiOutlineLogout/> <span className="  hover:text-[#00bf73]">LogOut</span></button> 
      </div>
      
      </ul>
    </div>
      :
      <div className="flex items-center  justify-center gap-2 menu menu-horizontal">
      <CiUser className="  text-black  hover:text-[#00bf73] "/>
      <div className=" flex items-center justify-center ">
      <NavLink to='/login'  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-[#00bf73]   underline font-semibold" : "font-semibold"
              }><span className=" hover:text-[#00bf73]">LogIn</span></NavLink>
      <li className=" mx-2">/</li>
      <NavLink to='/register'  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-[#00bf73]   underline font-semibold" : "font-semibold"
              }><span className=" hover:text-[#00bf73]">Register</span></NavLink>
    </div>
         </div>
         }
  </div>
</div>
          </div>
     );
};

export default NavBar;