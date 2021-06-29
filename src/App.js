import logo from "./logo.svg";
import "./App.css";

// SPECAIL IN THE WORLD OF REACT FAMILY
const App = () => {
  let counter = 100;
  let username = "Capgemini";

  return (
    <div>
      <h1>Hello World</h1>
      <h1>{username}</h1>
      <h1>{counter}</h1>
    </div>
  );
};

export default App;
