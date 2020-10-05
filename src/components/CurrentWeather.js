import React, { useState, useEffect } from "react";
import axios from "axios";

const CurrentWeather = () => {
  const apiKey = "3c850b0463346d2fffad82b66d5eb561";
  const city = "budapest";
  const abc = "[°C] = [K] − 273.15";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const icon = "";
  const iconUrl = "http://openweathermap.org/img/wn/10d@2x.png";

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
    <React.Fragment>
      <img
        src={`http://openweathermap.org/img/wn/${state.weather[0].icon}@2x.png`}
        alt=""
      />
      <p>Location: {state.name}</p>
      <p>Temperature: {Math.round(state.main.temp - 273.15)} °C</p>
      <p>Humidity: {state.main.humidity} %</p>
      <p>Pressure: {state.main.pressure} hPa</p>
      <p>Wind: {Math.round(state.wind.speed * 3.6)} km/h</p>
    </React.Fragment>
  );
};

export default CurrentWeather;
