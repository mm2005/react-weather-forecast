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

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "200px 1fr",
    gridTemplateRows: "1fr 2fr",
    height: "auto",
    marginTop: "20px",
    padding: "60px",
    // backgroundImage: "url(../assets/rain.jpg)",
  };

  const box1Style = {
    lineHeight: "1.5rem",
    fontSize: "1.15rem",
    padding: "15px 15px 25px 15px",
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

  return (
    <div className="grid-container" style={gridStyle}>
      <div className="box1" style={box1Style}>
        <div style={lilGridStyle}>
          <h3 stlye={{ gridArea: "todaybox1" }}>Today</h3>
          <img
            src={imageSource}
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
            <h3>{Math.round(state.main.temp)}°</h3>
            <p>11°</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
