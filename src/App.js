import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <CurrentWeather />
      </Router>
    </div>
  );
}

export default App;
