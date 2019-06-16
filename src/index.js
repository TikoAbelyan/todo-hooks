import React from "react";
import ReactDOM from "react-dom";
import PlaningListContainer from "./containers/PlaningListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <PlaningListContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
