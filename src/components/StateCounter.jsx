import { useState, useEffect } from "react";

function StateCounter() {
  // Create state for the counter and set default to 0
  const [count, setCount] = useState(0);

  //Countdown
  const [today, setToday] = useState(new Date());

  // Create a start data state
  const [seasonStart, setSeasonStart] = useState(new Date("09/01/2023"));

  // Take the start data away from today's date to work out the difference
  const total = Date.parse(seasonStart) - Date.parse(today);

  // Use the math function to work out the number of days
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  useEffect(() => {
    const setTimer = setInterval(() => {
      setCount((currentCount) => currentCount + 1);
    }, 1000);

    // Must use clearinterval after running the update on the counter otherwise there will be a
    // continuous loop and error
    return () => clearInterval(setTimer);
  }, []);

  return (
    <div className="font-red-hat">
      <h3 className="text-lg font-bold">Date Counter</h3>

      <div>
        <h3 className="text-lg font-bold">Timer: {count}</h3>
      </div>
      <div>
        <h3 className="text-lg font-bold">
          {days} days to 1st September 2023{" "}
        </h3>
      </div>
    </div>
  );
}

export default StateCounter;
