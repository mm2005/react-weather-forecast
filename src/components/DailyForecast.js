import React from "react";
import { weekdays } from "../util/daysOfWeek";

const DailyForecast = (props) => {
  return props.state.map((item) => (
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

export default DailyForecast;
