import React,{useContext} from 'react'
import FavoriteListContext from "./FavoriteListContext";



const AddFavorite = (props) => {
    const [favoriteLocations, setFavoriteLocations] = useContext(FavoriteListContext);

    const AddLocation = () =>{
        if(!favoriteLocations.includes(props.location)){
            setFavoriteLocations([...favoriteLocations, props.location])
        }

    }

    return (
        <div>
            <button onClick={AddLocation} >Add to favorites</button>
        </div>
    )

}

export default AddFavorite;