import React, { useContext } from "react";
import { ChosenDayContext } from "../context/ChosenDayContext";
import { weekdays } from "../util/daysOfWeek";

const DailyForecast = (props) => {
  const [chosenDay, setChosenDay] = useContext(ChosenDayContext);

  const clickHandler = (e) => {
    setChosenDay(parseInt(e.currentTarget.dataset.dayofweek));

    const elem = e.currentTarget;
    const currentChosenDayElement = document.querySelector(".chosenday");

    if (currentChosenDayElement) {
      currentChosenDayElement.style.borderTop = "5px solid transparent";
      currentChosenDayElement.classList.remove("chosenday");
    }
    elem.classList.add("chosenday");
    elem.style.borderTop = "5px solid orange";
  };

  const mouseEnterHandler = (e) => {
    const elem = e.currentTarget;

    elem.classList.add("hovered-day");

    elem.style.borderTop = elem.classList.contains("chosenday")
      ? "5px solid #fc6203"
      : "5px solid #fcd303";
  };

  const mouseLeaveHandler = (e) => {
    const elem = e.currentTarget;

    elem.classList.remove("hovered-day");

    elem.style.borderTop = elem.classList.contains("chosenday")
      ? "5px solid orange"
      : "5px solid transparent";
  };

  const loadHandler = (e) => {
    const elem = e.currentTarget;

    if (parseInt(elem.dataset.dayofweek) === chosenDay) {
      elem.classList.add("chosenday");
      elem.style.borderTop = "5px solid orange";
    }
  };

  const initialStyle = {
    padding: "10px 7px 0 7px",
    borderTop: "5px solid transparent",
    cursor: "pointer",
  };

  return props.forecasts.map((item) => (
    <div
      key={item.dt}
      onClick={clickHandler}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onLoad={loadHandler}
      style={initialStyle}
      data-dayofweek={new Date(item.dt_txt).getDay()}
    >
      <h4>{weekdays[new Date(item.dt_txt).getDay()]}</h4>
      <img
        src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
        alt=""
        style={{ width: "auto" }}
      />
      <p>{Math.round(item.main.temp) + "°"}</p>
      <p>{item.weather[0].description}</p>
    </div>
  ));
};

export default DailyForecast;
