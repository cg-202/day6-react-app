import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

// SPECAIL IN THE WORLD OF REACT FAMILY
const App = () => {
  // let counter = 100;
  let [counter, setCounter] = useState(100);

  const increment = () => {
    // counter += 1;
    setCounter(counter + 1);
    console.log("I AM INCREMENT FUNCTION", counter);
  };

  return (
    <div>
      <h1>Event Demo</h1>
      <h3>{counter}</h3>
      <input type="button" value="INCREMENT" onClick={increment} />
    </div>
  );
};

export default App;
