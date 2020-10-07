import React from "react";

const HourlyForecast = (props) => {
  return (
    <React.Fragment>
      {props.bob.map((item) => {
        console.log(item);
        return <p key={item.dt}>{new Date(item.dt_txt).getHours() + ":00"}</p>;
      })}
    </React.Fragment>
  );
};

export default HourlyForecast;
