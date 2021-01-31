import React from 'react';
import Modal from "../Modal/Modal";
import './Movie.css';

const Movie = (props) => {
    const data = Array.from(props.data);
    const { onStateChange } = props;
    
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
                           
                           <button className="button button--secondary movie__button" onClick={() => onStateChange(props.Film)} >Add Favourite</button>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default Movie;