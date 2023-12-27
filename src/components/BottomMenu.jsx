
import { FaHome, FaSearch, FaTrophy, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BottomMenu = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-300 flex justify-around items-center shadow-md">
      <Link to="/" className="text-gray-600 hover:text-blue-500 transition duration-300 ease-in-out">
        <div className="flex flex-col items-center">
          <FaHome size={24} />
          <p className="text-xs">Home</p>
        </div>
      </Link>
      <Link to="/search" className="text-gray-600 hover:text-blue-500 transition duration-300 ease-in-out">
        <div className="flex flex-col items-center">
          <FaSearch size={24} />
          <p className="text-xs">Search</p>
        </div>
      </Link>
      <Link to="/leaderboard" className="text-gray-600 hover:text-blue-500 transition duration-300 ease-in-out">
        <div className="flex flex-col items-center">
          <FaTrophy size={24} />
          <p className="text-xs">Leaderboard</p>
        </div>
      </Link>
      <Link to="/profile" className="text-gray-600 hover:text-blue-500 transition duration-300 ease-in-out">
        <div className="flex flex-col items-center">
          <FaUser size={24} />
          <p className="text-xs">Profile</p>
        </div>
      </Link>
    </footer>
  );
};

export default BottomMenu;
