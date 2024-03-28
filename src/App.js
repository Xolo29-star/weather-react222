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
            This project was coded by <span>Alessya Krapivina</span>
            and is{" "}
            <a
              href="https://github.com/alessyak/weather-react"
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
