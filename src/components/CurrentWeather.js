import React from "react";
import styled from "styled-components";
import WeatherDetails from "./WeatherDetails";

const CurrentWeather = ({ state }) => {
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

export default CurrentWeather;
