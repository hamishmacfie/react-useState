import { useState, useEffect } from "react";

function InputSubmission() {
  // Create state for both the error and the input value
  const [error, setError] = useState("");
  const [name, setName] = useState("");

  //   Handle the form submit value and assign the value
  const handleSubmit = (e) => {
    // Set the form entry value to an variable
    const entry = e.target.name.value;
    e.preventDefault();

    // Check to see if the entry value is less than or equal to 3 characters
    if (entry.length <= 3) {
      setError("Please enter more than 3 characters");
    }
    // If more than 3 characters, set the value to state
    setName(entry);
  };

  // Everytime the error runs, set a timeout to clear the error message in the UI
  useEffect(() => {
    setTimeout(() => {
      setError(null);
    }, [3000]);
  }, [error]);

  return (
    <div>
      {name ? (
        <div>
          <div className="bg-purple-900 text-white p-3 text-2xl">
            You entered: {name}
          </div>
          <button
            className="my-3 p-2 bg-stone-400 hover:bg-stone-500 rounded-md"
            onClick={() => setName(null)}
          >
            Reset
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-64 mx-auto">
            <label htmlFor="name">Name</label>
            {error ? (
              <div className="p-2 bg-red-600 m-3 text-white">{error}</div>
            ) : (
              ""
            )}
            <input
              type="name"
              name="name"
              placeholder="Enter your name"
              className="p-2 border shadow-sm"
            />

            <button className="p-2 rounded my-2 bg-green-600 hover:bg-green-500 text-white">
              Click Here
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default InputSubmission;
