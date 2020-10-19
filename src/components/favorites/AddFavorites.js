import React, { useState, useEffect, useContext } from "react";
import FavoriteListContext from "../../context/FavoriteListContext";

const AddFavorite = (props) => {
  const [favoriteLocations, setFavoriteLocations] = useContext(
    FavoriteListContext
  );

  const [icon, setIcon] = useState();

  useEffect(() => {
    favoriteLocations.includes(props.location)
      ? setIcon("check")
      : setIcon("plus");
  }, [props.location, favoriteLocations]);

  const AddLocation = () => {
    if (!favoriteLocations.includes(props.location)) {
      setIcon("check");
      setFavoriteLocations([...favoriteLocations, props.location]);
    }
  };

  const ButtonStyle = {
    float: "left",
    fontSize: "22px",
    marginLeft: "15px",
    marginTop: "4px",
    display: "flex",
    cursor: "pointer",
  };

  return (
    <i onClick={AddLocation} className={`fa fa-${icon}`} style={ButtonStyle} />
  );
};

export default AddFavorite;
