import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import WeatherDetails from "./WeatherDetails";

const FavoriteLocations = () => {
  const apiKey = "3c850b0463346d2fffad82b66d5eb561";
  const city = "budapest";
  const url = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${city}&units=metric`;

  const [state, setState] = useState({
    id: null,
    name: null,
    timezone: null,
    main: {},
    weather: [{}],
    wind: {},
  });

  useEffect(() => {
    axios.get(url).then((res) =>
      setState({
        id: res.data.id,
        name: res.data.name,
        timezone: res.data.timezone,
        main: res.data.main,
        weather: res.data.weather,
        wind: res.data.wind,
      })
    );
  }, [url]);

  return (
    <CardHolder>
      <WeatherDetails state={state} />
    </CardHolder>
  );
};

const CardHolder = styled.div`
  display: flex;
  margin: 20px;
  padding: 10px;
  height: auto;
  flex-wrap: wrap;
`;

export default FavoriteLocations;
