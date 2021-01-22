import React, {useState} from 'react';
import './Favourite.css';
import _ from "lodash";

const Favourite = (props) => {

    /*let myFavourites = window.localStorage.getItem("Favs");
    myFavourites = JSON.parse(myFavourites);

    const [favs, setFavs] = useState([]);

   // if(myFavourites !== null){
     //   setFavs(myFavourites.favourites);
    //}
   

    const addFavourite = (event) => {
        const buttonClicked= event.target;
        const movieItem = buttonClicked.parentElement;
        const movieTitle = movieItem.querySelector('.movie__title').innerHTML;
        //selectedFavourites.push(movieTitle);
        setFavs(myFavourites.favourites);
        setFavs([...favs, movieTitle]);
        //setFavs(_.uniq(selectedFavourites));
        window.localStorage.setItem("Favs", JSON.stringify({ favs }));

    }*/
    const [favs, setFavs] = useState([]);

    const addFavourite = ({target}) => {
        
    } 
  

    return(
    
         <button className="button" onClick={addFavourite} id={"fav-"+ props.movieKey}>Add Favourite</button>
           
    );
          
};

export default Favourite;