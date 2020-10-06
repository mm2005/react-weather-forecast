import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CWeather from "./components/CWeather";
import FavoriteLocations from "./components/FavoriteLocations";
import About from "./components/About";
import Navbar from "./components/layout/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={CWeather} />
          <Route path="/favorites" component={FavoriteLocations} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
      <SearchBar></SearchBar>
    </div>
  );
}

export default App;
