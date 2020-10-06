import React, { useState, useEffect } from "react";
import axios from "axios";
import { convertMpsToKph } from "../util/converters";

const Weather = () => {
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

  const imageSource = `http://openweathermap.org/img/wn/${state.weather[0].icon}@2x.png`;

  const cardStyle = {
    textAlign: "center",
    margin: "10px",
    padding: "20px",
    border: "2px solid lightgray",
  };

  return (
    <div className="card" style={cardStyle}>
      <div style={{ lineHeight: "1.5rem", fontSize: "1.15rem" }}>
        <img src={imageSource} alt="" style={{ width: "auto" }} />
        <h4>{state.name}</h4>
        <h3>{Math.round(state.main.temp)}°</h3>
        <div style={{ padding: "20px", fontSize: "0.85rem" }}>
          <p>Humidity: {state.main.humidity}%</p>
          <p>Pressure: {state.main.pressure} hPa</p>
          <p>Wind: {convertMpsToKph(state.wind.speed)} km/h</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
