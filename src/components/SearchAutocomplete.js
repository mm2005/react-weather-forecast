import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const SearchAutocomplete = (props) => {
  const autocompleteApiKey = "jzxwrjVpz590MChJ0KjlrLnwg_syikNAPYB0tvSemLE";
  const autocompleteUrl = `https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?query=${props.searchedCity}&maxresults=5&resultType=city&language=en&apikey=${autocompleteApiKey}`;
  const [state, setState] = useState({
    suggestions: [],
  });
  const [visibility, setVisibility] = useState(true);

  const DropdownStyle = {
    display: visibility ? "block" : "none",
  };

  useEffect(() => {
    if (props.searchedCity !== "") {
      setVisibility(true);
      axios
        .get(autocompleteUrl)
        .then((res) =>
          setState({
            suggestions: res.data.suggestions,
          })
        )
        .catch((err) => {
          console.log(err);
        });
    }
  }, [props.searchedCity, autocompleteUrl]);

  const clickHandler = (city) => {
    props.setSearchedCity(city);
    props.setInputText("");
    setVisibility(false);
  };

  return (
    <div
      className="dropdown"
      style={{
        position: "absolute",
        zIndex: 1,
        boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
        width: "inherit",
        background: "white",
      }}
    >
      {state.suggestions !== undefined &&
        state.suggestions.map((suggestion) => (
          <Dropdown
            style={DropdownStyle}
            key={suggestion.locationId}
            onClick={() => {
              clickHandler(suggestion.address.city);
            }}
          >
            {suggestion.countryCode === "USA" ? (
              <div>
                {suggestion.address.city}, {suggestion.address.state},{" "}
                {suggestion.address.country}
              </div>
            ) : (
              <div>
                {suggestion.address.city}, {suggestion.address.country}
              </div>
            )}
          </Dropdown>
        ))}
    </div>
  );
};

const Dropdown = styled.div`
  font-size: 15px;
  font-family: "Gill Sans", sans-serif;
  padding: 5px;
  cursor: pointer;
`;

export default SearchAutocomplete;
