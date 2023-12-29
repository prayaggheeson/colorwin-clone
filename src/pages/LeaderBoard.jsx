import SelectGame from "../components/SelectGame";
import CountdownTimer from "../components/CountdownTimer";
import { Link } from "react-router-dom";
import { useState } from "react";

const JoinButton = ({ color, buttonText, modalContent }) => {
  const [showModal, setShowModal] = useState(false);
  const [numberLot, setNumberLot] = useState(0);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const [amount, setAmount] = useState(100);

  const handleButtonClick = (value) => {
    setAmount(value);
  };

  const handleDecrease = () => {
    setNumberLot((prevNumber) => Math.max(prevNumber - 1, 0));
  };

  const handleIncrease = () => {
    setNumberLot((prevNumber) => Math.min(prevNumber + 1, 10));
  };

  return (
    <div>
      <button
        className={`bg-${color}-500 hover:shadow-xl hover:shadow-${color}-900 transition-all duration-300 hover:bg-${color}-600 text-white px-6 md:px-20 py-3 md:py-3 rounded w-full`}
        onClick={openModal}
      >
        {buttonText}
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg text-black w-full max-w-md">
            {modalContent}

            <div className="mb-4">
              <label className="block mt-4 text-xl font-semibold ">
                Contract Money
              </label>
            </div>
            <input
              type="text"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mb-4 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[100, 1000, 10000, 50000].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => handleButtonClick(value)}
                  className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 cursor-pointer focus:outline-none focus:ring focus:border-blue-500"
                >
                  {value}
                </button>
              ))}
            </div>

            <div className="flex items-center mt-4">
              <h3 className="mr-4 text-xl font-semibold">
                Number of Lots: {numberLot}
              </h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleDecrease}
                  className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 cursor-pointer focus:outline-none focus:ring focus:border-red-500"
                  disabled={numberLot === 0}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                </button>
                <button
                  onClick={handleIncrease}
                  className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 cursor-pointer focus:outline-none focus:ring focus:border-green-500"
                  disabled={numberLot === 10}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <button
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded mt-4"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const LeaderBoard = () => {
  const bonusBalance = localStorage.getItem("bonusBalance");
  const walletbalance = localStorage.getItem("walletbalance");
  const periodTime = localStorage.getItem("periodTime");

  return (
    <>
      <div className="bg-teal-500 p-8 text-white text-center">
        <h1 className="text-2xl md:text-5xl mb-4">
          Wallet Balance: {walletbalance}
        </h1>
        <h3 className="text-xl md:text-3xl mb-6">Bonus: {bonusBalance}</h3>
        <div className="grid grid-cols-2 md:grid-flow-col justify-center gap-3 md:gap-10 ">
          <Link
            to="/recharge"
            className="bg-blue-500 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-900 transition-all duration-700 text-white px-8 md:px-20 py-3 rounded"
          >
            Recharge
          </Link>
          <button className="bg-blue-500 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-900 transition-all duration-700 text-white px-8 md:px-20 py-3 rounded">
            Trend
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-900 transition-all duration-700 text-white px-8 md:px-20 py-3 rounded">
            Self Txn
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-900 transition-all duration-700 text-white px-8 md:px-20 py-3 rounded">
            Team Txn
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-900 transition-all duration-700 text-white px-8 md:px-20 py-3 rounded">
            Select Time
          </button>
        </div>
      </div>

      {/* numberbuttons */}
      <div className="bg-slate-200 p-8 text-black">
        <h3 className="text-xl md:text-3xl mb-4">Period Time: {periodTime}</h3>
        <h3 className="text-xl md:text-3xl mb-4">
          CountDown:
          <CountdownTimer />
        </h3>
        <div className="bg-white rounded-lg p-4 mb-4 grid grid-flow-col gap-2 md:gap-6 md:grid-flow-row md:grid-cols-3">
          <JoinButton
            color="green"
            buttonText="Join Green"
            modalContent={<p>Green Modal </p>} 
          />
          <JoinButton
            color="red"
            buttonText="Join Red"
            modalContent={<p>Red Modal </p>} 
          />
          <JoinButton
            color="violet"
            buttonText="Join Violet"
            modalContent={<p>Violet Modal </p>} 
          />
        </div>

        {/* numberbuttons */}
        <div className="grid md:mt-16 grid-cols-5 item-center justify-center md:grid-cols-5 gap-4">
          <JoinButton color="violet" buttonText="0" modalContent={<p>0</p>} />
          <JoinButton color="green" buttonText="1" modalContent={<p>1</p>} />
          <JoinButton color="red" buttonText="2" modalContent={<p>2</p>} />
          <JoinButton color="green" buttonText="3" modalContent={<p>3</p>} />
          <JoinButton color="red" buttonText="4" modalContent={<p>4</p>} />
          <JoinButton color="violet" buttonText="5" modalContent={<p>5</p>} />
          <JoinButton color="red" buttonText="6" modalContent={<p>6</p>} />
          <JoinButton color="green" buttonText="7" modalContent={<p>7</p>} />
          <JoinButton color="red" buttonText="8" modalContent={<p>8</p>} />
          <JoinButton color="green" buttonText="9" modalContent={<p>9</p>} />
        </div>
      </div>
      {/* Games component */}
      <div className="bg-slate-200 p-8 text-black">
        <SelectGame />
      </div>
    </>
  );
};

export default LeaderBoard;
