import React from "react";
import { convertMpsToKph } from "../util/converters";

const HourlyForecast = (props) => {
  return props.bob.map((item) => (
    <div
      key={item.dt}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <h4 style={{ padding: "20px 0" }}>
        {new Date(item.dt_txt).getHours() + ":00"}
      </h4>
      <div
        style={{ padding: "0 0 20px 0", borderBottom: "1px solid lightgray" }}
      >
        <img
          src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
          alt=""
          style={{ width: "50px", height: "50px" }}
        />
        <p>{Math.round(item.main.temp) + "°"}</p>
      </div>
      <div style={{}}>
        <img
          src={
            "https://cdn2.iconfinder.com/data/icons/freecns-cumulus/32/519851-62_Raindrops-512.png"
          }
          alt=""
          style={{ width: "25px", height: "25px" }}
        />
        <p style={{ color: "lightblue" }}>{item.main.humidity + "%"}</p>
      </div>
      <div>
        <img
          src={
            "https://cdn1.iconfinder.com/data/icons/weather-18/512/wind_storm-512.png"
          }
          alt=""
          style={{ width: "25px", height: "25px" }}
        />
        <p style={{ color: "gray", fontSize: "0.8rem" }}>
          {convertMpsToKph(item.wind.speed) + " km/h"}
        </p>
      </div>
      <div>
        <img
          src={
            "https://cdn2.iconfinder.com/data/icons/network-sensors/201/pressure-512.png"
          }
          alt=""
          style={{ width: "25px", height: "25px" }}
        />
        <p style={{ color: "gray", fontSize: "0.8rem" }}>
          {item.main.pressure + " hPa"}
        </p>
      </div>
    </div>
  ));
};

export default HourlyForecast;
