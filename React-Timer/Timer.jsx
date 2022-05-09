import React, { useEffect, useState } from "react";

const Timer = ({ initTime, endTime }) => {
  const [time, setTime] = useState(initTime);
  useEffect(() => {
    const id = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === endTime) {
          clearInterval(id);
          return prevTime;
        } else {
          return prevTime + 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [time, endTime]);

  return (
    <>
      <div>
        <h1>Timer</h1>
        <h2>{time}s</h2>
        <button onClick={() => setTime(0)}>Start Again</button>
      </div>
    </>
  );
};

export default Timer;
