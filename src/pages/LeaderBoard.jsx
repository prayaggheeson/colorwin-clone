const LeaderBoard = () => {
  const bonusBalance = localStorage.getItem("bonusBalance");
  const walletbalance = localStorage.getItem("walletbalance");
  const periodTime = localStorage.getItem("periodTime");
  const countDownhere = localStorage.getItem("countDownhere");

  return (
    <>
      <div className="bg-teal-500 p-8 text-white text-center">
        <h1 className="text-2xl md:text-5xl mb-4">
          Wallet Balance: {walletbalance}
        </h1>
        <h3 className="text-xl md:text-3xl mb-6">Bonus: {bonusBalance}</h3>
        <div className="flex flex-wrap justify-center gap-10 space-y-2 md:space-y-0 md:space-x-2">
          <button className="bg-blue-500 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-900 transition-all duration-700 text-white px-20 py-3 rounded">
            Recharge
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-900 transition-all duration-700 text-white px-20 py-3 rounded">
            Trend
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-900 transition-all duration-700 text-white px-20 py-3 rounded">
            Self Txn
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-900 transition-all duration-700 text-white px-20 py-3 rounded">
            Team Txn
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-900 transition-all duration-700 text-white px-20 py-3 rounded">
            Select Time
          </button>
        </div>
      </div>
      <div className="bg-slate-200 p-8 text-black">
        <h3 className="text-xl md:text-3xl mb-4">Period Time: {periodTime}</h3>
        <h3 className="text-xl md:text-3xl mb-4">CountDown: {countDownhere}</h3>
        <div className="bg-white rounded-lg p-4 mb-4 space-y-2">
          <div className="flex justify-around">
            <button className="bg-green-500  hover:shadow-xl hover:shadow-green-900 transition-all duration-300 hover:bg-green-600 text-white px-20 py-3 rounded">
              Join Green
            </button>
            <button className="bg-red-500  hover:shadow-xl hover:shadow-red-900 transition-all duration-300 hover:bg-red-600 text-white px-20 py-3 rounded">
              Join Red
            </button>
            <button className="bg-violet-500 hover:shadow-xl hover:shadow-violet-900 transition-all duration-300 hover:bg-violet-600 text-white px-20 py-3 rounded">
              Join Violet
            </button>
          </div>
        </div>
        {/* numberbuttons */}
        <div className="grid md:mt-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          <button className="bg-gradient-to-bl from-violet-500 to-red-500  hover:shadow-xl hover:shadow-violet-900 transition-all duration-300 text-white px-6 py-3 rounded">
            0
          </button>
          <button className="bg-green-500 text-white  hover:shadow-xl hover:shadow-green-900 transition-all duration-300 px-6 py-3 rounded">
            1
          </button>
          <button className="bg-red-500  hover:shadow-xl hover:shadow-red-900 transition-all duration-300 text-white px-6 py-3 rounded">
            2
          </button>
          <button className="bg-green-500  hover:shadow-xl hover:shadow-green-900 transition-all duration-300 text-white px-6 py-3 rounded">
            3
          </button>
          <button className="bg-red-500 hover:shadow-xl hover:shadow-red-900 transition-all duration-300 text-white px-6 py-3 rounded">
            4
          </button>
          <button className="bg-gradient-to-bl from-violet-500 to-green-500 hover:shadow-xl hover:shadow-violet-900 transition-all duration-300 text-white px-6 py-3 rounded">
            5
          </button>
          <button className="bg-red-500 hover:shadow-xl hover:shadow-red-900 transition-all duration-300 text-white px-6 py-3 rounded">
            6
          </button>
          <button className="bg-green-500  hover:shadow-xl hover:shadow-green-900 transition-all duration-300 text-white px-6 py-3 rounded">
            7
          </button>
          <button className="bg-red-500 hover:shadow-xl hover:shadow-red-900 transition-all duration-300 text-white px-6 py-3 rounded">
            8
          </button>
          <button className="bg-green-500  hover:shadow-xl hover:shadow-green-900 transition-all duration-300 text-white px-6 py-3 rounded">
            9
          </button>
        </div>
      </div>
    </>
  );
};

export default LeaderBoard;
