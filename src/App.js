import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import FavoriteListContext from "./context/FavoriteListContext";
import FavoriteLocations from "./components/favorites/FavoriteLocations";
import Search from "./components/search/Search";
import Registration from "./components/user/Registration";

function App() {
  const favoriteLocations = useState([]);
  return (
    <div className="App">
      <FavoriteListContext.Provider value={favoriteLocations}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route path="/favorites" component={FavoriteLocations} />
            <Route path="/registration" component={Registration} />
          </Switch>
        </Router>
      </FavoriteListContext.Provider>
    </div>
  );
}

export default App;
