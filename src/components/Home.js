import React, {useState, useEffect} from 'react';
import BondFilms from '../BondFilms';
import Movie from "./Movie/Movie";
import Dropdown from "./Dropdown/Dropdown";
import Form from "./Form/Form";
import _ from "lodash";
const Home = () => {
   let myFavourites = window.localStorage.getItem("Favs");
   myFavourites = JSON.parse(myFavourites);
   if(_.isEmpty(myFavourites)){
       myFavourites=[]
   }else{
       myFavourites = myFavourites.favs;
   }
   const [movieData, setMovieData] = useState(BondFilms);
   const [filmsDisplayed, setFilmsDisplayed] = useState(BondFilms)
   const [uniqueNames, setUniqueNames] = useState([]);
   const [currentSelectedActor, setCurrentSelectedActor] = useState("Any");
   const [favs, setFavs] = useState(myFavourites);
   // Will only run when the component first mounts
   
   useEffect(() => {
       const names = [];
       for(let i=0; i<BondFilms.length; i++){
           names.push(BondFilms[i]["Bond Actor"]);
       }
       setUniqueNames([...new Set(names)]);
   }, []);

   useEffect(() =>{
       if (currentSelectedActor === "Any") {
           setFilmsDisplayed(movieData);
       } else {
           const filmsDisplayedByActor = _.filter(movieData, [["Bond Actor"], currentSelectedActor]);
           setFilmsDisplayed(filmsDisplayedByActor);
       }
   }, [movieData]);

   useEffect(() => {
       window.localStorage.setItem("Favs", JSON.stringify({ favs }));
   }, [favs]);

   const handleStateChange = selectedActor =>{
       setCurrentSelectedActor(selectedActor);
       if(selectedActor !== "Any"){
           const filmsDisplayedByActor = _.filter(movieData, [["Bond Actor"], selectedActor]);
           setFilmsDisplayed(filmsDisplayedByActor);
       }else{
           setFilmsDisplayed(movieData)
       }
   };
   const handleAddMovie = newMovie => {
       const actorName = newMovie["Bond Actor"];
       if (!uniqueNames.includes(actorName)) {
           setUniqueNames([...uniqueNames, actorName])
       }
       setMovieData([...movieData, newMovie]);
   }
   const handleAddFav = film => {
       setFavs([...favs, film]);
   }
   return (
       <main className="movies-content">
           <Dropdown data={uniqueNames} onStateChange={handleStateChange} placeholder={"Any"} label={"Select an actor: "} id={"actors"} />
           <Movie data={filmsDisplayed} onStateChange={handleAddFav} /> 
           <Form data={filmsDisplayed} onStateChange={handleAddMovie} />
       </main>
   );
}
export default Home;

