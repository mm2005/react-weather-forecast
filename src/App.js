import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import FavoriteLocations from "./components/FavoriteLocations";
import FavoriteListContext from "./components/FavoriteListContext";
import Navbar from "./components/layout/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
  const favoriteLocations = useState([]);
  return (
    <div className="App">
      <FavoriteListContext.Provider value={favoriteLocations}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={SearchBar} />
            <Route path="/favorites" component={FavoriteLocations} />
          </Switch>
        </Router>
      </FavoriteListContext.Provider>
    </div>
  );
}

export default App;
