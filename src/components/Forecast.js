import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const WeatherForecast = () => {
  const apiKey = "3c850b0463346d2fffad82b66d5eb561";
  const city = "budapest";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

  function checkDateTime(data) {
    return new Date(data.dt_txt).getHours() === 12;
  }

  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
      )
      .then((res) => setState(res.data.list.filter(checkDateTime)));
  }, [url]);

  return (
    console.log(state),
    state.map((item) => (
      <div>
        <p>{item.dt_txt}</p>
        <p>{item.main.temp}</p>
        <p>{item.weather[0].description}</p>
        <img
          src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
          alt=""
          style={{ width: "auto" }}
        />
      </div>
    ))
  );
};

export default WeatherForecast;
