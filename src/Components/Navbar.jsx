import { use } from "react";
import { Link } from "react-router";
import { Authcontext } from "../AuthProvider/Authcontext";

const Navbar = () => {
  const { userEmail,handleLogout } = use(Authcontext);
  // console.log(userEmail);
  const logout=()=>{
    handleLogout();
  }
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <Link to={'/'}  >Home</Link>
            <Link to={'/create'}  className="">Create</Link>

          </ul>
        </div>
        {
          userEmail?<h3 className="text-2xl font-semibold" >{userEmail}</h3>:<p></p>
        }
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Link to={'/'} className="mr-5 btn btn-primary" >Home</Link>
          <Link to={'/create'} className="mr-5 btn btn-primary" >Create</Link>

        </ul>
      </div>
      <div className="navbar-end">
        {
          userEmail?<button onClick={logout} className="btn bg-red-600 text-white font-semibold" >Logout</button>:<Link to={'/auth/login'} ><button className="btn bg-green-600 text-white font-semibold" >Login</button></Link>
        }
      </div>
    </div>
  );
};

export default Navbar;