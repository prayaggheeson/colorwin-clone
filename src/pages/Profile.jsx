import { Link } from 'react-router-dom';
import { FaWallet, FaArrowCircleUp, FaUniversity, FaLock, FaDownload, FaTelegram, FaInfoCircle, FaSignOutAlt } from 'react-icons/fa';

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg bg-white rounded-lg overflow-hidden shadow-md">

        {/* Wallet Balance */}
        <div className="p-6 bg-gradient-to-tr from-[#1f1a91] to-[#cb717b] text-white text-center rounded-t-lg">
          <h3 className="text-2xl md:text-5xl font-semibold mb-2">Wallet Balance</h3>
          <p className="text-xl md:text-3xl font-bold">$500.00</p>
        </div>

        {/* Recharge Button */}
        <div className="p-6 text-center">
          <Link to="/recharge" className="bg-green-500 text-white p-3 rounded w-full block text-center hover:bg-green-600">
            <FaArrowCircleUp className="inline-block mr-2" />
            Recharge
          </Link>
        </div>

        {/* Wallet Menu */}
        <div className="p-6 bg-gray-200">
          <h3 className="text-lg font-semibold mb-4 text-center text-gray-800">Wallet Menu</h3>
          <ul className="space-y-2">
            <button className="flex min-w-full items-center p-3 bg-white rounded">
              <FaWallet className="inline-block mr-2 text-gray-600" />
              Commission Fee: 2%
            </button>
            <button className="flex min-w-full items-center p-3 bg-white rounded">
              <FaWallet className="inline-block mr-2 text-gray-600" />
              Signup Bonus: $10.00
            </button>
            <button className="flex min-w-full items-center p-3 bg-white rounded">
              <FaWallet className="inline-block mr-2 text-gray-600" />
              Interest: 5%
            </button>
            <button className="flex min-w-full items-center p-3 bg-white rounded">
              <FaWallet className="inline-block mr-2 text-gray-600" />
              Promotion: $5.00
            </button>
            <button className="flex min-w-full items-center p-3 bg-gradient-to-l from-lime-600 to-teal-500 rounded">
              <FaWallet className="inline-block mr-2" />
              Gift Lifafa: $2.00
            </button>
          </ul>
        </div>

        {/* Wallet Options */}
        <div className="p-6 bg-gray-200">
          <h3 className="text-lg font-semibold mb-4 text-center text-gray-800">Wallet Options</h3>
          <ul className="space-y-2">
            <li className="flex items-center justify-between p-3 bg-white rounded hover:bg-gray-300">
              <Link to="/recharge">
                <FaArrowCircleUp className="inline-block mr-2" />
                Recharge
              </Link>
            </li>
            <li className="flex items-center justify-between p-3 bg-white rounded hover:bg-gray-300">
              <Link to="/withdraw">
                <FaArrowCircleUp className="inline-block mr-2" />
                Withdraw
              </Link>
            </li>
            <li className="flex items-center justify-between p-3 bg-white rounded hover:bg-gray-300">
              <Link to="/transaction">
                <FaUniversity className="inline-block mr-2" />
                Transaction
              </Link>
            </li>
            <li className="flex items-center justify-between p-3 bg-white rounded hover:bg-gray-300">
              <Link to="/update-bank">
                <FaUniversity className="inline-block mr-2" />
                Update Bank Information
              </Link>
            </li>
            <li className="flex items-center justify-between p-3 bg-white rounded hover:bg-gray-300">
              <Link to="/change-password">
                <FaLock className="inline-block mr-2" />
                Change Password
              </Link>
            </li>
          </ul>
        </div>

        {/* Other Options */}
        <div className="p-6 bg-gray-200">
          <h3 className="text-lg font-semibold mb-4 text-center text-gray-800">Other Options</h3>
          <ul className="space-y-2">
            <li className="flex items-center justify-between p-3 bg-white rounded hover:bg-gray-300">
              <Link to="/download-app">
                <FaDownload className="inline-block mr-2" />
                Download Our App
              </Link>
            </li>
            <li className="flex items-center justify-between p-3 bg-white rounded hover:bg-gray-300">
              <Link to="/telegram-channel">
                <FaTelegram className="inline-block mr-2" />
                Join Our Telegram Channel
              </Link>
            </li>
            <li className="flex items-center justify-between p-3 bg-white rounded hover:bg-gray-300">
              <Link to="/about">
                <FaInfoCircle className="inline-block mr-2" />
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Logout Button */}
        <div className="p-6">
          <button className="bg-red-500 text-white p-3 rounded w-full block text-center hover:bg-red-600">
            <FaSignOutAlt className="inline-block mr-2" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;