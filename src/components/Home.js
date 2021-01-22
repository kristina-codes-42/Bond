import React, {useState, useEffect} from 'react';
import BondFilms from '../BondFilms';
import Movie from "./Movie/Movie";
import Dropdown from "./Dropdown/Dropdown";
import Form from "./Form/Form";
import _ from "lodash";



const Home = () => {

    const Films = BondFilms;
    let filmsDisplayed = BondFilms;
    let myFavourites = window.localStorage.getItem("Favs");
    myFavourites = JSON.parse(myFavourites);
    console.log(myFavourites);
    if(_.isEmpty(myFavourites)){
        myFavourites=[]
    }else{
        myFavourites = myFavourites.favs;
    }

    const [movieData, setMovieData] = useState({ filmsDisplayed });
    const [favs, setFavs] = useState(myFavourites);
    
    useEffect(() =>{
        setMovieData(filmsDisplayed);
    }, [filmsDisplayed]);

    const names = [];
    for(let i=0; i<BondFilms.length; i++){
        names.push(BondFilms[i]["Bond Actor"]);
    }
    const uniqueNames = [...new Set(names)];
    

    const handleStateChange = updatedState =>{
        if(updatedState.value === "Any"){
            setMovieData(Films);
        }else{
            filmsDisplayed = _.filter(Films, [["Bond Actor"], updatedState.value]);
            setMovieData(filmsDisplayed);
        }
    };

    const handleAddMovie = updatedMovies => {
        setMovieData(updatedMovies);
    }
    
    const handleAddFav = target => {
        console.log('click');
        const clickedItem = target.parentElement.parentElement.id;
        const updatedItems = _.filter(filmsDisplayed, function(item){
            return item.Film === clickedItem;
        })
        const newFavs = updatedItems[0].Film;
        setFavs([...favs, newFavs]);
        window.localStorage.setItem("Favs", JSON.stringify({ favs }));
       
    }
   
    

    return (
        <main className="movies-content">
            <Dropdown data={uniqueNames} onStateChange={handleStateChange} placeholder={"Any"} label={"Select an actor: "} id={"actors"} />
            <Movie data={movieData} onStateChange={handleAddFav} />  
            <Form data={movieData} onStateChange={handleAddMovie} />
        </main>
    );

}

export default Home;