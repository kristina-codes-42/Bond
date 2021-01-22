import React from "react";
import './Modal.css';
import Button from "../Button/Button";

const Modal = ( props ) => {

  const handleClick = event =>{
      
      let clickedModal = document.getElementById("movie-modal"+event.target.id);
      
      clickedModal.classList.remove("modal__hidden");
      clickedModal.classList.add("modal__visible");
      document.body.classList.add('stop-scrolling');
  };

  const modalClose = event => {
      let closeButton = event.target;
      let openModalContainer = closeButton.parentElement;
      let openModal = openModalContainer.parentElement;
      openModal.classList.remove("modal__visible");
      openModal.classList.add("modal__hidden");
      document.body.classList.remove('stop-scrolling');
  }
    

    return (
        <div>
          <div id={props.movieId} className="modal__hidden">
            <div className="modal__content">
              <h2>{props.name} ({props.date})</h2>
              <h3>Starring {props.actor}</h3>
              <h3>Synopsis</h3>
              <p>{props.description}</p>
              <h3>Box office takings</h3>
              <p>{props.boxOffice} Million</p>
              <Button onClick={modalClose} text={"Close"} />
            </div>
          </div>
          <Button buttonClass="modal__button" onClick={handleClick} id={props.movieKey} text={"More Info"} />
          
        </div>
    );
};

export default Modal;