// RegisterPage.js
import { useState } from 'react';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleRegister = () => {
    // Implement your registration logic here
    console.log('Register clicked with Name:', name, 'Number:', number, 'Email:', email, 'Referral Code:', referralCode, 'Password:', password, 'Agree Terms:', agreeTerms);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-bold mb-6">Register</h2>

        {/* Name Input */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

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

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Referral Code Input */}
        <div className="mb-4">
          <label htmlFor="referralCode" className="block text-gray-600 mb-2">
            Referral Code
          </label>
          <input
            type="text"
            id="referralCode"
            placeholder="Enter your referral code"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            value={referralCode}
            onChange={(e) => setReferralCode(e.target.value)}
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
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

        {/* Agree Terms Checkbox */}
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="agreeTerms"
            className="mr-2"
            checked={agreeTerms}
            onChange={() => setAgreeTerms(!agreeTerms)}
          />
          <label htmlFor="agreeTerms" className="text-gray-600">
            I agree to the terms and conditions
          </label>
        </div>

        {/* Register Button */}
        <button
          className={`bg-blue-500 text-white p-2 rounded w-full ${
            !agreeTerms ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
          }`}
          onClick={handleRegister}
          disabled={!agreeTerms}
        >
          Register
        </button>
        <div className='mt-3'>
            <p>Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
