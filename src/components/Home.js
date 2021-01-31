import React, {useState, useEffect} from 'react';
import BondFilms from '../BondFilms';
import Movie from "./Movie/Movie";
import Dropdown from "./Dropdown/Dropdown";
import Form from "./Form/Form";
import _ from "lodash";

const Home = () => {

    //const Films = BondFilms;
    let filmsDisplayed = BondFilms;
    let myFavourites = window.localStorage.getItem("Favs");
    myFavourites = JSON.parse(myFavourites);
    
    if(_.isEmpty(myFavourites)){
        myFavourites=[]
    }else{
        myFavourites = myFavourites.favs;
    }

    const [movieData, setMovieData] = useState({ });
    const [favs, setFavs] = useState(myFavourites);
    
    useEffect(() =>{
        setMovieData(filmsDisplayed);
    }, [filmsDisplayed]);

    useEffect(() => {
        window.localStorage.setItem("Favs", JSON.stringify({ favs }));
    }, [favs]);


    const names = [];
    for(let i=0; i<BondFilms.length; i++){
        names.push(BondFilms[i]["Bond Actor"]);
    }
    const uniqueNames = [...new Set(names)];
    

    const handleStateChange = selectedActor =>{
        
        if(selectedActor !== "Any"){
            const filmsDisplayedByActor = _.filter(filmsDisplayed, [["Bond Actor"], selectedActor]);
            setMovieData(filmsDisplayedByActor);
        }else{
            console.log(movieData);
            setMovieData(movieData);
        }
    };

    const handleAddMovie = newMovie => {
        setMovieData([...movieData, newMovie]);
    }
    
    const handleAddFav = film => {
        setFavs([...favs, film]);
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