import { Link, NavLink } from "react-router-dom";
import { CiUser } from 'react-icons/ci';

const NavBar = () => {
     const links = <>
     <li><NavLink to='/'  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-[#00bf73]   underline font-semibold" : "font-semibold "
              }>Home</NavLink></li>
     <li><NavLink to='/service'  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-[#00bf73]   underline font-semibold" : "font-semibold"
              }>Service</NavLink></li>
     <li><NavLink to='/about'  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-[#00bf73]   underline font-semibold" : "font-semibold"
              }>About</NavLink></li>
        
     </>
     return (
          <div className="mx-3 md:mx-14 lg:mx-20 sticky top-0">
               <div className="navbar bg-base-100 rounded-xl ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
        {links}
      </ul>
    </div>
    <a className=" normal-case text-xl lg:mb-2  md:text-4xl ">Acade<span className=" text-3xl md:text-4xl lg:text-5xl mb-1.5 md:mb-2 font-extrabold text-[#00bf73]">mie</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}  
    </ul>
  </div>
  <div className="navbar-end text-sm font-medium "> 

  <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost hidden ">
      <CiUser className=" text-black"/>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 w-20 z-[1] p-2 shadow bg-base-100 rounded-box ">
      <Link to={'/login'}>Login</Link> 
    <Link to={'/register'}>Register</Link>
      </ul>
    </div>
         <div className="flex items-center gap-1 menu menu-horizontal">
         <CiUser className=" text-black "/>
    <div className=" flex gap-2 ">
    <Link to={'/login'}>Login</Link> 
    <span>/</span>
    <Link to={'/register'}>Register</Link>
    </div>
         </div>
  </div>
</div>
          </div>
     );
};

export default NavBar;