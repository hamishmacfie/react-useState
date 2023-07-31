import { useState } from "react";

function BasicCounter() {
  const [number, setNumber] = useState(() => {
    return 0;
  });

  function increaseNumber() {
    setNumber((currentNumber) => currentNumber + 1);
  }

  function decreaseNumber() {
    setNumber((currentNumber) => currentNumber - 1);
  }

  return (
    <div className="font-red-hat">
      <h3 className="font-bold text-lg">Basic Number increase/decrease</h3>

      <div className="flex w-40 mx-auto justify-between items-center text-2xl mt-5">
        <div>
          <button
            className="p-3 bg-red-700 text-white rounded-lg hover:bg-red-600"
            onClick={decreaseNumber}
          >
            -
          </button>
        </div>
        <div className="text-4xl">{number}</div>
        <div>
          <button
            className="p-3 text-white bg-green-800 rounded-lg hover:bg-green-600"
            onClick={increaseNumber}
          >
            +
          </button>
        </div>
      </div>
      <button
        className="mt-4 bg-amber-600 w-32 rounded-lg text-white p-2 hover:bg-amber-500"
        onClick={() => setNumber(0)}
      >
        Reset
      </button>
    </div>
  );
}

export default BasicCounter;
