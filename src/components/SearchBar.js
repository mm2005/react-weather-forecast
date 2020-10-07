import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import CurrentWeather from "./CurrentWeather";
import SearchAutocomplete from "./SearchAutocomplete";

const SearchBar = () => {
  const apiKey = "3c850b0463346d2fffad82b66d5eb561";
  const [city, setCity] = useState("budapest");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  const [state, setState] = useState({
    id: null,
    name: null,
    timezone: null,
    main: {},
    weather: [{}],
    wind: {},
  });

  useEffect(() => {
    axios
      .get(url)
      .then(
        (res) =>
          setState({
            id: res.data.id,
            name: res.data.name,
            timezone: res.data.timezone,
            main: res.data.main,
            weather: res.data.weather,
            wind: res.data.wind,
          }),
        setError(null)
      )
      .catch((err) => {
        setError(err);
      });
  }, [url]);

  const submitHandler = () => {
    setCity(searchTerm.toLowerCase());
    setSearchTerm("");
  };

  const inputFieldHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const keyDownHandler = (event) => {
    if (event.key === "Enter") {
      submitHandler();
    }
  };

  return (
    <React.Fragment>
      <Search>
        <Input
          type="text"
          placeholder="Search.."
          value={searchTerm}
          onChange={inputFieldHandler}
          onKeyDown={keyDownHandler}
        />
        <SearchButton onClick={submitHandler}>
          <i className="fa fa-search"></i>
        </SearchButton>
        <SearchAutocomplete searchedCity={searchTerm}></SearchAutocomplete>
      </Search>
      {error !== null && (
        <Error>Location not found. Please try a different search term.</Error>
      )}
      <CurrentWeather currentWeather={state}></CurrentWeather>
    </React.Fragment>
  );
};

const SearchButton = styled.button`
  width: 30px;
  height: 30px;
  text-align: center;
  font-size: 20px;
  background-color: #00b4cc;
  color: #fff;
  border: 1px solid #00b4cc;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
`;

const Input = styled.input`
  width: 200px;
  height: 30px;
  font-size: 15px;
  border-radius: 5px 0 0 5px;
  outline: none;
  border: 3px solid #00b4cc;
`;

const Search = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  padding: 5px;
`;

const Error = styled.div`
  padding: 10px;
  background-color: #ffbaba;
  color: #d8000c;
  margin: 10px 40px;
`;

export default SearchBar;
