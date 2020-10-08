import React, { useState, createContext } from "react";

export const ChosenDayContext = createContext();

export const ChosenDayProvider = (props) => {
  const chosenDay = useState(new Date(Date.now()).getDay());

  return (
    <ChosenDayContext.Provider value={chosenDay}>
      {props.children}
    </ChosenDayContext.Provider>
  );
};
