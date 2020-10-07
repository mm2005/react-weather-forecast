import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const SearchAutocomplete = (props) => {
  const autocompleteApiKey = "jzxwrjVpz590MChJ0KjlrLnwg_syikNAPYB0tvSemLE";
  const autocompleteUrl = `https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?query=${props.searchedCity}&maxresults=5&resultType=city&apikey=${autocompleteApiKey}`;
  const [state, setState] = useState({
    suggestions: [],
  });

  useEffect(() => {
    if (props.searchedCity !== "") {
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

  return (
    <React.Fragment>
      {state.suggestions !== undefined &&
        state.suggestions.map((suggestion) => (
          <div key={suggestion.locationId}>
            {suggestion.address.city}, {suggestion.address.country}
          </div>
        ))}
    </React.Fragment>
  );
};

export default SearchAutocomplete;
