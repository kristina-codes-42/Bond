import React from "react";
import './Button.css';

const Button = ( props ) => {
    let buttonClass= 'button ' + props.buttonClass;
    return (
        <button className={buttonClass} onClick={props.onClick} id={props.id}>{props.text}</button>
    );
};

export default Button;