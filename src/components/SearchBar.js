import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import CWeather from "./CWeather";
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";

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

  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
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

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    // setAddress(value);
    setCoordinates(latLng);
  };

  return (
    <React.Fragment>
      {/* <Search>
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
      </Search> */}
      <PlacesAutocomplete
        value={searchTerm}
        onChange={inputFieldHandler}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <p>Latitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p>

            <input {...getInputProps({ placeholder: "Type address" })} />

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      {error !== null && (
        <Error>Location not found. Please try a different search term.</Error>
      )}
      <CWeather state={state}></CWeather>
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
