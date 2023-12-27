import  { useState } from 'react';

const ChangePasswordPage = () => {
  const [number, setNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [isSendOtpActive, setIsSendOtpActive] = useState(false);

  const handleSendOtp = () => {
    // Implement your logic to send OTP here
    console.log('Sending OTP to Number:', number);
    // For simplicity, let's assume the OTP is sent successfully
    // You may want to implement actual OTP sending logic
    setIsSendOtpActive(false); // Disable the Send OTP button after sending
  };

  const handleChangePassword = () => {
    // Implement your change password logic here
    console.log('Changing password for Number:', number, 'with OTP:', otp, 'and New Password:', password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-bold mb-6">Change Password</h2>

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
            onChange={(e) => {
              setNumber(e.target.value);
              setIsSendOtpActive(e.target.value.trim() !== ''); // Enable Send OTP button if the number is not empty
            }}
          />
        </div>

        {/* OTP Input */}
        <div className="mb-4">
          <label htmlFor="otp" className="block text-gray-600 mb-2">
            OTP
          </label>
          <input
            type="text"
            id="otp"
            placeholder="Enter OTP"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>

        {/* Send OTP Button */}
        <button
          className={`bg-blue-500 text-white p-2 rounded w-full ${
            isSendOtpActive ? 'hover:bg-blue-600' : 'opacity-50 cursor-not-allowed'
          }`}
          onClick={handleSendOtp}
          disabled={!isSendOtpActive}
        >
          Send OTP
        </button>

        {/* New Password Input */}
        <div className="mt-4 mb-4">
          <label htmlFor="password" className="block text-gray-600 mb-2">
            New Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your new password"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Change Password Button */}
        <button
          className={`bg-blue-500 text-white p-2 rounded w-full ${
            otp.trim() !== '' ? 'hover:bg-blue-600' : 'opacity-50 cursor-not-allowed'
          }`}
          onClick={handleChangePassword}
          disabled={otp.trim() === ''}
        >
          Change Password
        </button>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
