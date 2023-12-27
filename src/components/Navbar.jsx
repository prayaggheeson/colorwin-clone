import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white p-4 flex items-center justify-between">
      {/* Logo/Brand */}
      <div className="flex items-center">
        <Link to={'home'}>
          <img
            src="https://colourwin247.life/logo1.jpg"
            alt="Logo"
            className="h-16 w-16 mr-2 rounded-full object-contain"
          />
        </Link>
        {/* <span className="text-white text-lg font-bold">Your Logo</span> */}
      </div>

      {/* Download Button */}
      <button className="bg-white text-blue-500 hover:bg-blue-500 shadow-lg hover:shadow-2xl hover:text-white border border-white font-bold py-2 px-4 rounded-full flex items-center">
        <FaDownload className="mr-2" />
        Download
      </button>
    </nav>
  );
};

export default Navbar;
