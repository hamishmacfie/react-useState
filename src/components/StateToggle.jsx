import { useState, useEffect } from "react";

function StateToggle() {
  // Set a state to display the text
  const [display, setDisplay] = useState(false);

  //   Settle a click handler to manage the id's of the buttons that are clicked
  function handleClick(e) {
    let id = e.target.value;
    const output = text(id);
    setDisplay(output);
  }

  // Function to display the content depending on the id value of each button
  function text(id) {
    let output;
    switch (id) {
      case "1":
        output = <h4>This is the output for {id}</h4>;
        break;
      case "2":
        output = <h4>This is the output for {id}</h4>;
        break;
      case "3":
        output = <h4>This is the output for {id}</h4>;
        break;
      default:
        output = "";
    }
    return output;
  }

  //   Use Effect set the display value
  useEffect(() => {
    setDisplay(text("1"));
  }, []);

  return (
    <div className="font-red-hat">
      <h3 className="text-lg font-bold">State Toggle</h3>
      <button
        className="py-2 px-4 my-2 mx-1 bg-orange-500 hover:bg-orange-400 text-white rounded text-lg"
        value="1"
        onClick={handleClick}
      >
        One
      </button>
      <button
        className="py-2 px-4 my-2 mx-1 bg-red-700 hover:bg-red-600 text-white rounded text-lg"
        value="2"
        onClick={handleClick}
      >
        Two
      </button>
      <button
        className="py-2 px-4 my-2 mx-1 bg-blue-700 hover:bg-blue-600 text-white rounded text-lg"
        value="3"
        onClick={handleClick}
      >
        Three
      </button>

      <div className="bg-gray-200 p-5 text-lg border-t-2 border-gray-300 mt-3">
        {display ? <div>{display}</div> : ""}
      </div>
    </div>
  );
}

export default StateToggle;
