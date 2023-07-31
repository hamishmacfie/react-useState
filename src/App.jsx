import BasicCounter from "./components/BasicCounter";
import InputSubmission from "./components/InputSubmission";
import StateCounter from "./components/StateCounter";
import StateToggle from "./components/stateToggle";

function App() {
  return (
    <div className="container mx-auto w-3/4 text-center">
      <h1 className="text-3xl font-red-hat font-semibold my-5">
        useState Components
      </h1>
      <div className="mt-5">
        <BasicCounter />
      </div>

      <hr className="my-5 border bg-zinc-300 shadow-lg" />

      <div className="mt-5">
        <StateCounter />
      </div>

      <hr className="my-5 border bg-zinc-300 shadow-lg" />

      <div className="mt-5">
        <StateToggle />
      </div>
      <hr className="my-5 border bg-zinc-300 shadow-lg" />

      <div className="mt-5">
        <InputSubmission />
      </div>
    </div>
  );
}

export default App;
