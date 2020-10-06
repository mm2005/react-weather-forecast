import React from "react";
import WeatherForecast from "./Forecast";

const Weather = ({ state }) => {
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

  return (
    <React.Fragment>
      {state !== undefined && (
        <div className="grid-container" style={gridStyle}>
          <div className="box1" style={box1Style}>
            <div style={lilGridStyle}>
              <h3 stlye={{ gridArea: "todaybox1" }}>Today</h3>
              <img
                src={`http://openweathermap.org/img/wn/${state.weather[0].icon}@2x.png`}
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
          <div className="box2" style={box2Style}>
            <WeatherForecast city={state.name} />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Weather;
