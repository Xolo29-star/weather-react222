import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="app-wrapper">
          <Weather defaultCity="Toronto" />
          <footer>
            This project was coded by <span>Alessya Krapivina</span>
            and is{" "}
            <a href="" target="_blank">
              open-sourced on GitHub
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
