import React from "react";
import { convertMpsToKph } from "../util/converters";

const WeatherDetails = ({ state }) => {
  const imageSource = `http://openweathermap.org/img/wn/${state.weather[0].icon}@2x.png`;

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
          <h4>{state.name}</h4>
          <h3>{Math.round(state.main.temp)}°</h3>
          <div style={{ padding: "20px", fontSize: "0.85rem" }}>
            <p>Humidity: {state.main.humidity}%</p>
            <p>Pressure: {state.main.pressure} hPa</p>
            <p>Wind: {convertMpsToKph(state.wind.speed)} km/h</p>
          </div>
        </div>
      </div>
      {/* Multiplicated for testing purposes */}
      {[...Array(9)].map((item) => {
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
      })}
    </React.Fragment>
  );
};

export default WeatherDetails;
