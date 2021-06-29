import logo from "./logo.svg";
import "./App.css";

// SPECAIL IN THE WORLD OF REACT FAMILY
const App = () => {
  let counter = 100;
  let username = "Capgemini";
  let list = ["Delhi", "Kolkata", "Mumbai", "Chennai", "KASHMIR", "raipur"];

  return (
    <div>
      <h1>Hello World</h1>
      <h1>{username}</h1>
      <h1>{counter}</h1>

      <h1>Dynamic Web Site</h1>
      {list.map((item) => (
        <h3>{item}</h3>
      ))}

      <h1>Static Web Stite </h1>
      <h3>Delhi</h3>
      <h3>Kolkata</h3>
      <h3>Mumbai</h3>
      <h3>Chennai</h3>
    </div>
  );
};

export default App;
