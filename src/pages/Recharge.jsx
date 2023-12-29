import { useState } from "react";

const Recharge = () => {
  const [balance, setBalance] = useState(localStorage.getItem("balance") || 0);
  const [amount, setAmount] = useState(0);

  const handleButtonClick = (value) => {
    setAmount(value);
  };

  const handleRecharge = (e) => {
    e.preventDefault();
    const newBalance = parseFloat(balance) + parseFloat(amount);
    setBalance(newBalance);
    localStorage.setItem("balance", newBalance);
    setAmount(0);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-semibold mb-4">Balance: {balance}</h1>
      <form
        onSubmit={handleRecharge}
        className="bg-blue-500 p-8 rounded-lg shadow-lg"
      >
        <input
          type="text"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mb-4 p-2 w-full rounded-md"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {[200, 500, 700, 1000, 2000, 5000, 10000, 50000].map((value) => (
            <input
              key={value}
              type="button"
              value={value}
              onClick={() => handleButtonClick(value)}
              className="bg-white text-blue-500 p-2 rounded-md hover:bg-blue-100 cursor-pointer"
            />
          ))}
        </div>
        <input
          type="submit"
          value="Recharge"
          className="bg-green-500 text-white p-2 hover:shadow-lg hover:shadow-green-900 transition-all duration-700 shadow-lg w-full rounded-md hover:bg-green-600 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Recharge;
