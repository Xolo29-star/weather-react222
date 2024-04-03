import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="app-wrapper">
          <Weather defaultCity="Toronto" />
          <footer>
            This project was coded by <span>Noxolo Gama</span>
            and is{" "}
            <a
              href="https://github.com/Xolo29-star/weather-react222"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              open-sourced on GitHub
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
