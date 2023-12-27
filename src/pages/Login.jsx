// LoginPage.js
import { useState } from 'react';

const LoginPage = () => {
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Login clicked with Number:', number, 'and Password:', password);
  };

  // Disable login button if either number or password is empty
  const isLoginButtonDisabled = !number.trim() || !password.trim();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-bold mb-6">Login</h2>

        {/* Number Input */}
        <div className="mb-4">
          <label htmlFor="number" className="block text-gray-600 mb-2">
            Number
          </label>
          <input
            type="tel"
            id="number"
            placeholder="Enter your number"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-600 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Login Button */}
        <button
          className={`bg-blue-500 text-white p-2 rounded w-full ${isLoginButtonDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
          onClick={handleLogin}
          disabled={isLoginButtonDisabled}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
