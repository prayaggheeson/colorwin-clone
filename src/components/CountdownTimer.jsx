import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const initialTime = localStorage.getItem("countdownTimer") || 180; 
  const [timeLeft, setTimeLeft] = useState(parseInt(initialTime, 10));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Save the current timer value to localStorage
    localStorage.setItem("countdownTimer", timeLeft.toString());

    
    if (timeLeft === 0) {
      // Reload the page after 3 minutes
      window.location.reload();
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold mb-4">Countdown Timer</h1>
      <div className="button-85 text-4xl font-bold mb-6 text-center">
        {formatTime(timeLeft)}
      </div>
    </div>
  );
};

export default CountdownTimer;
