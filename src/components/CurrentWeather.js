import React, { useState, useEffect } from "react";
import DailyForecast from "./DailyForecast";
import axios from "axios";

const Weather = ({ currentWeather }) => {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "200px 1fr",
    gridTemplateRows: "1fr 2fr",
    height: "auto",
    marginTop: "20px",
    padding: "60px",
  };

  const box1Style = {
    lineHeight: "1.5rem",
    fontSize: "1.15rem",
    padding: "15px 15px 25px 15px",
  };

  const box2Style = {
    display: "flex",
    padding: "20px",
    textAlign: "center",
    justifyContent: "space-evenly",
  };

  const lilGridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "0.5fr 0.5fr",
    gridTemplateAreas: `
      'todaybox1 .'
      'todaybox2 todaybox3'`,
    justifyItems: "center",
    alignItems: "center",
  };

  const apiKey = "3c850b0463346d2fffad82b66d5eb561";
  const limit = "32";

  function checkDateTime(data) {
    return new Date(data.dt_txt).getHours() === 12;
  }

  const [state, setState] = useState([]);

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&units=metric&q=${currentWeather.name}&cnt=${limit}`;
    axios
      .get(url)
      .then((res) => setState(res.data.list.filter(checkDateTime)))
      .catch((err) => console.log(err));
  }, [currentWeather.name]);

  return (
    <React.Fragment>
      {currentWeather !== undefined && (
        <React.Fragment>
          <h2>{currentWeather.name}</h2>
          <div className="grid-container" style={gridStyle}>
            <div className="box1" style={box1Style}>
              <div style={lilGridStyle}>
                <h3 stlye={{ gridArea: "todaybox1" }}>Today</h3>
                <img
                  src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
                  alt=""
                  style={{ width: "auto", gridArea: "todaybox2" }}
                />
                <div
                  style={{
                    gridArea: "todaybox3",
                    justifySelf: "start",
                    lineHeight: "2rem",
                  }}
                >
                  <h3>{Math.round(currentWeather.main.temp)}°</h3>
                  <p>11°</p>
                </div>
              </div>
            </div>
            <div className="box2" style={box2Style}>
              <DailyForecast state={state} />
            </div>
            <div className="box3">
              {state.length === 4 && (
                <React.Fragment>
                  <p>Placeholder: {state[0].main.temp}</p>
                </React.Fragment>
              )}
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Weather;
