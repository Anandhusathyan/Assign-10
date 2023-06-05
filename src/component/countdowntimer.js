import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const [countdownTime, setCountdownTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    let countdownInterval;

    if (countdownTime > 0) {
      setCurrentTime(Math.floor(countdownTime));

      countdownInterval = setInterval(() => {
        setCurrentTime((prevTime) => {
          const newTime = prevTime - 1;
          if (newTime === 0) {
            clearInterval(countdownInterval);
          }
          return newTime;
        });
      }, 1000);
    }

    return () => {
      clearInterval(countdownInterval);
    };
  }, [countdownTime]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const inputTime = parseInt(event.target.value);
      const roundedTime = Math.floor(inputTime);
      setCountdownTime(roundedTime || 0);
    }
  };

  return (
    <div className="countdowntimer">
      <input
        type="text"
        id="timeCount"
        placeholder="Enter countdown time (seconds)"
        onKeyDown={handleKeyDown}
      />
      <div id="current-time">{currentTime}</div>
    </div>
  );
}

export default CountdownTimer;
