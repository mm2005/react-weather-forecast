import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import About from "./components/About";
import Navbar from "./components/layout/Navbar";
import WeatherForecast from "./components/Forecast";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/favorites" component={CurrentWeather} />
          <Route path="/about" component={About} />
          <Route path="/forecast" component={WeatherForecast} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
