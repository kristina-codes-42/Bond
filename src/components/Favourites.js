import React from 'react';
import _ from "lodash";
import './Favourites.css';
import BondFilms from '../BondFilms';
import Movie from "./Movie/Movie";

const Favourites = () => {
    //<h3 id="no-favs" className="favs__no-favs">You have no favourites selected</h3>
    let filmsDisplayed = BondFilms;
    let updatedItems = [];

    let myFavourites = window.localStorage.getItem("Favs");
    myFavourites = JSON.parse(myFavourites);
    if(_.isEmpty(myFavourites)){
        myFavourites=[]
    }else{
        myFavourites = myFavourites.favs;
    }
    for(let i=0; i < myFavourites.length; i++){
         updatedItems.push(_.filter(filmsDisplayed, function(item){
            return item.Film === myFavourites[i];
        }));
    }
    const newFavs = updatedItems;
    let favList = _.map(newFavs, function(movie) { 
        return (movie[0]);
    });
    favList= _.uniq(favList);

    return (
        <div className="favourites-content">
            <Movie data={favList}/>
        </div>
    );

}

export default Favourites;