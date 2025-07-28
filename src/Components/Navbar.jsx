import { Link } from "react-router";

const Navbar = () => {
  return (
    <div >
      <nav className="bg-cyan-300 shadow-md fixed w-full top-0 z-10">
      <div className="container mx-auto px-4 py-3">
        <div className="text-center " >
          <h1 className="text-3xl font-semibold" >Smoothies</h1>
        </div>
        <div className="flex justify-center space-x-8">
          <Link 
            to="/" 
            className="text-gray-800 hover:text-blue-600 font-medium text-lg transition duration-300"
          >
            Home
          </Link>
          <Link 
            to="/create" 
            className="text-gray-800 hover:text-blue-600 font-medium text-lg transition duration-300"
          >
            Create
          </Link>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;