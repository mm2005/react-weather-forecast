import React, { useState, useEffect } from "react";
import axios from "axios";

const Test = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:44336/api/weatherforecast/oslo")
      .then((res) => setState(res.data));
  }, []);

  return (
    <div>
      <p>{state.name}</p>
      {console.log(state)}
    </div>
  );
};

export default Test;
