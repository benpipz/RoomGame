import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const targetDate = new Date("March 9, 2024 00:00:00").getTime();
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining);

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining);
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(timerInterval);
  }, []);

  return (
    <>
      <h2>
        {timeRemaining.days} days, {timeRemaining.hours} hours,{" "}
        {timeRemaining.minutes} minutes, {timeRemaining.seconds} seconds
      </h2>
    </>
  );
};

export default CountdownTimer;
