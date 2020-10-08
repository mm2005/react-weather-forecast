import React, {useState, useEffect, useContext} from "react";
import styled from "styled-components";
import WeatherDetails from "./WeatherDetails";
import axios from "axios";
import FavoriteListContext from "./FavoriteListContext";
import AddFavorite from "./AddFavorites";
import Compare from "../util/ListSorter";

// <<<<<<< HEAD:src/components/CurrentWeather.js
// const CurrentWeather = ({ state }) => {
// =======
const FavoriteLocations = () => {
  const apiKey = "3c850b0463346d2fffad82b66d5eb561";
  // const city = "budapest";
  // const url = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${city}&units=metric`;
  const [favoriteLocations, setFavoriteLocations] = useContext(FavoriteListContext);
  const [favoriteStates, setFavoriteStates] = useState([])
    
  function notEmpty(data) {
      return data.id !== null 
  }
  
  const [state, setState] = useState({
    id: null,
    name: null,
    timezone: null,
    main: {},
    weather: [{}],
    wind: {},
  });
  
  useEffect(() => {
    setFavoriteStates([])
    favoriteLocations.map(location =>
        axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${location}&units=metric`)
            .then((res) =>
            setState({
                id: res.data.id,
                name: res.data.name,
                timezone: res.data.timezone,
                main: res.data.main,
                weather: res.data.weather,
                wind: res.data.wind,
            })
        )
    );
  }, [favoriteLocations]);
  
  useEffect(() => {
      setFavoriteStates([...favoriteStates, state]
          .sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)))
  }, [state])
  
  return (
    <CardHolder>
        <AddFavorite location={"budapest"} />
        {favoriteStates.filter(notEmpty).map(state =>
        <WeatherDetails state={state} />)}
    </CardHolder>
  );
};

const CardHolder = styled.div`
  display: flex;
  margin: 20px;
  padding: 10px;
  height: auto;
  flex-wrap: wrap;
`;

export default FavoriteLocations;
