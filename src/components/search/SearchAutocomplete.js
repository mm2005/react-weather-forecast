import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const SearchAutocomplete = (props) => {
  const autocompleteApiKey = "jzxwrjVpz590MChJ0KjlrLnwg_syikNAPYB0tvSemLE";
  const autocompleteUrl = `https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?query=${props.searchedCity}&maxresults=5&resultType=city&language=en&apikey=${autocompleteApiKey}`;
  const [state, setState] = useState({
    suggestions: [],
  });

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

  const setVisibility = (isVisible) => {
    const dropdownContainer = document.querySelector(".dropdown");
    dropdownContainer.style.display = isVisible ? "block" : "none";
  };

  const clickHandler = (city) => {
    props.setSearchedCity(city);
    props.setInputText("");
    setVisibility(false);
  };

  const mouseEnterHandler = (e) => {
    e.currentTarget.style.color = "lightblue";
  };

  const mouseLeaveHandler = (e) => {
    e.currentTarget.style.color = "black";
  };

  return (
    <DropdownContainer className="dropdown">
      {state.suggestions !== undefined &&
        state.suggestions.map((suggestion) => (
          <DropdownItem
            key={suggestion.locationId}
            onClick={(e) => {
              clickHandler(suggestion.address.city);
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            {suggestion.countryCode === "USA" ? (
              <React.Fragment>
                {suggestion.address.city}, {suggestion.address.state},{" "}
                {suggestion.address.country}
              </React.Fragment>
            ) : (
              <React.Fragment>
                {suggestion.address.city}, {suggestion.address.country}
              </React.Fragment>
            )}
          </DropdownItem>
        ))}
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  position: absolute;
  z-index: 1;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  width: inherit;
  background: white;
`;

const DropdownItem = styled.div`
  font-size: 15px;
  font-family: "Gill Sans", sans-serif;
  padding: 5px;
  cursor: pointer;
`;

export default SearchAutocomplete;
