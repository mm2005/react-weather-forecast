import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CWeather from "./components/CWeather";
import FavoriteLocations from "./components/FavoriteLocations";
import FavoriteListContext from "./components/FavoriteListContext";
import About from "./components/About";
import Navbar from "./components/layout/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
    const favoriteLocations = useState(["budapest", "london"])
  return (
    <div className="App">
        <FavoriteListContext.Provider value={favoriteLocations}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={CWeather} />
          <Route path="/favorites" component={FavoriteLocations} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
        </FavoriteListContext.Provider>
      <SearchBar></SearchBar>
    </div>
  );
}

export default App;
