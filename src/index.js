import React from "react";
import ReactDOM from "react-dom";

// JSX
const App = () => <h1>Hello World JSX</h1>;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
