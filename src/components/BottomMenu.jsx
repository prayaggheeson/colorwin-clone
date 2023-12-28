import { FaHome, FaSearch, FaTrophy, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const BottomMenu = () => {
  return (
    <nav className="sticky bottom-0 left-0 right-0 bg-white p-4">
      <div className="flex justify-around">
        <NavLink
          to="/"
          exact
          className="text-gray-700 flex flex-col items-center transition-all duration-300 transform hover:shadow-xl hover:shadow-blue-800 hover:rounded-full hover:bg-blue-700 hover:text-white hover:-translate-y-6 p-2"
        >
          <FaHome size={20} />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/search"
          className="text-gray-700 flex flex-col items-center transition-all duration-300 transform hover:shadow-xl hover:shadow-blue-800 hover:rounded-full hover:bg-blue-700 hover:text-white hover:-translate-y-6 p-2"
        >
          <FaSearch size={20} />
          <span>Search</span>
        </NavLink>

        <NavLink
          to="/leaderboard"
          className="text-gray-700 flex flex-col items-center transition-all duration-300 transform hover:shadow-xl hover:shadow-blue-800 hover:rounded-full hover:bg-blue-700 hover:text-white hover:-translate-y-6 p-2"
        >
          <FaTrophy size={20} />
          <span>Leaderboard</span>
        </NavLink>

        <NavLink
          to="/profile"
          className="text-gray-700 flex flex-col items-center transition-all duration-300 transform hover:shadow-xl hover:shadow-blue-800 hover:rounded-full hover:bg-blue-700 hover:text-white hover:-translate-y-6 p-2"
        >
          <FaUser size={20} />
          <span>Profile</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomMenu;
