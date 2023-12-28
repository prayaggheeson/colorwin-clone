import  { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Check if the time is up
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
    <span className="button-85 text-xl font-semibold m-6 cursor-not-allowed text-center">
      {formatTime(timeLeft)}
    </span>
  );
};

export default CountdownTimer;
