import React, {useState, useEffect} from 'react';
import Modal from "../Modal/Modal";
import './Movie.css';
import _ from "lodash";

const Movie = (props) => {
    const data = Array.from(props.data);
    const [movies, setMovies] = useState([]);
    const { onStateChange } = props;

    useEffect(() => {
        setMovies(props.data);
      },[props.data]);

    const handleItemClick = ({ target }) => {
        onStateChange(target);
    }
    
    
    return (
        <div className="movie-container">
            {data.map((props, key) => {
                return(
                    <article key={"movie-card" +key} className="movie" id={props.Film} >   
                        <img src={props.ImageURL} className="movie__image" alt="Movie poster" />
                        <div className="movie__details">
                            <h2 className="movie__title">{props.Film}</h2>
                            <p className="movie__actor"><strong>Starring:</strong> {props['Bond Actor']}</p>
                            <p className="movie__release-date">
                                <strong>Release Date:</strong> {props['UK release date']}
                            </p>
                            
                            <Modal 
                            movieId={"movie-modal"+key} 
                            movieKey={key} 
                            name={props.Film}
                            date={props['UK release date']}
                            description={props.Description}
                            actor={props['Bond Actor']}
                            boxOffice={props['Box Office(Millions)']}
                            />
                           
                            <button className="button" onClick={handleItemClick} >Fav</button>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default Movie;