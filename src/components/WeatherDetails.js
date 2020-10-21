import React from "react";
import { convertMpsToKph } from "../util/converters";

const WeatherDetails = ({ item }) => {
  const imageSource = `http://openweathermap.org/img/wn/${item.icon}@2x.png`;

  const cardStyle = {
    textAlign: "center",
    margin: "10px",
    padding: "20px",
    border: "2px solid lightgray",
  };

  return (
    <React.Fragment>
      <div className="card" style={cardStyle}>
        <div style={{ lineHeight: "1.5rem", fontSize: "1.15rem" }}>
          <img src={imageSource} alt="" style={{ width: "auto" }} />
          <h4>{item.city}</h4>
          <h3>{Math.round(item.temp)}°</h3>
          <div style={{ padding: "20px", fontSize: "0.85rem" }}>
            <p>Humidity: {item.humidity}%</p>
            <p>Pressure: {item.pressure} hPa</p>
            <p>Wind: {convertMpsToKph(item.wind)} km/h</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WeatherDetails;
