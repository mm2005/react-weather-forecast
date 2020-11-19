import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { ChosenDayProvider } from "../../context/ChosenDayContext";
import Weather from "../Weather";
import SearchAutocomplete from "./SearchAutocomplete";

const Search = () => {
  const [city, setCity] = useState();
  const url = `https://localhost:44336/api/currentweather/${city}`;
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  const [state, setState] = useState({
    id: null,
    city: null,
    description: null,
    temp: null,
    pressure: null,
    humidity: null,
    wind: null,
    icon: null,
  });

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data);
        setState({
          id: res.data.id,
          city: res.data.city,
          description: res.data.description,
          temp: res.data.temp,
          pressure: res.data.pressure,
          humidity: res.data.humidity,
          wind: res.data.wind,
          icon: res.data.icon,
        });
      }, setError(null))
      .catch((err) => {
        setError(err);
      });
  }, [url]);

  const submitHandler = () => {
    setCity(searchTerm.toLowerCase());
    setSearchTerm("");
  };

  const keyDownHandler = (event) => {
    if (event.key === "Enter") {
      submitHandler();
    }
  };

  const inputFieldChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <ChosenDayProvider>
      <React.Fragment>
        <SearchBar className="search">
          <Input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={inputFieldChangeHandler}
            onKeyDown={keyDownHandler}
          />
          <SearchButton onClick={submitHandler}>
            <i className="fa fa-search" />
          </SearchButton>
          <SearchAutocomplete
            searchedCity={searchTerm}
            setSearchedCity={setCity}
            setInputText={setSearchTerm}
          />
        </SearchBar>
        {error !== null && (
          <Error>Location not found. Please try a different search term.</Error>
        )}
        <Weather currentWeather={state} />
      </React.Fragment>
    </ChosenDayProvider>
  );
};

const SearchBar = styled.div`
  width: 400px;
  margin: auto;
  position: relative;
`;

const Input = styled.input`
  width: 360px;
  height: 40px;
  font-size: 15px;
  outline: none;
  border: 2px solid #b5c4d6;
  padding: 10px;
  margin-top: 0;
`;

const SearchButton = styled.button`
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 15px;
  background-color: #b5c4d6;
  color: #fff;
  border: 1px solid #b5c4d6;
  outline: none;
  cursor: pointer;
`;

const Error = styled.div`
  padding: 10px;
  background-color: #ffbaba;
  color: #d8000c;
  margin: 10px 40px;
`;

export default Search;
