import React, {useState} from 'react';
import './Dropdown.css'

const Dropdown = (props) => {

    const data = Array.from(props.data);

    const { onStateChange } = props;
    const [state, setState] = useState({
        selected: false,
        value: props.placeholder
    });

    const handleChange = event => {
        const updatedState = {
            ...state,
            selected: true,
            value: event.target.value
        }
        setState(updatedState);
        onStateChange(updatedState);
    };
    

    return (
        <div className="dropdown">
            <label className="dropdown__label" htmlFor={props.id}>{props.label}</label>
            <select
            id={props.id}
            name={props.id}
            className="dropdown__select"
             onChange={handleChange}
             >
                 <option>{props.placeholder}</option>
                {data.map((props, key) => { 
                    return(
                        <option key={key}>{props}</option>
                    );
                })}
            </select>
                 
        </div>
    );

}

export default Dropdown;