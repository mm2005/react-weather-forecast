import React, { useState, useEffect } from "react";
import axios from "axios";

const CurrentWeather = () => {
  const apiKey = "3c850b0463346d2fffad82b66d5eb561";
  const city = "brighton";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const [name, setName] = useState(null);

  useEffect(() => {
    axios.get(url).then((res) => setName(res.data.name));
  }, [url]);

  return <React.Fragment>{name}</React.Fragment>;
};

export default CurrentWeather;
