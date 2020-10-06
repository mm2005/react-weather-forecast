import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import About from "./components/About";
import Navbar from "./components/layout/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/favorites" component={CurrentWeather} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
      <SearchBar></SearchBar>
    </div>
  );
}

export default App;
