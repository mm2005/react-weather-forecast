import React, { useState, useEffect } from "react";
import axios from "axios";
import { weekdays } from "../util/daysOfWeek";

const WeatherForecast = (cityFromSearch) => {
  const apiKey = "3c850b0463346d2fffad82b66d5eb561";
  const limit = "32";

  function checkDateTime(data) {
    return new Date(data.dt_txt).getHours() === 12;
  }

  const [state, setState] = useState([]);

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&units=metric&q=${cityFromSearch.city}&cnt=${limit}`;
    axios.get(url).then((res) => setState(res.data.list.filter(checkDateTime)));
  }, [cityFromSearch]);

  return state.map((item) => (
    <div key={item.dt}>
      <h4>{weekdays[new Date(item.dt_txt).getDay()]}</h4>
      <img
        src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
        alt=""
        style={{ width: "auto" }}
      />
      <p>{Math.round(item.main.temp)}°</p>
      <p>{item.weather[0].description}</p>
    </div>
  ));
};

export default WeatherForecast;
