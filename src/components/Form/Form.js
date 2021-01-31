import React, {useState} from 'react';
import './Form.css';

const Form = (props) => {
    const { onStateChange } = props;
   
    const [name, setName] = useState("");
    const [actor, setActor] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [boxoffice, setBoxoffice] = useState("");
    const [image, setImage] = useState("");
    let newMovie;

    const addBondSubmit = (event) => {
        event.preventDefault();
        
        newMovie = {
            'Film': name,
            'Bond Actor': actor,
            'UK release date': date,
            'ImageURL': image,
            'Description': description,
            'Box Office(Millions)': boxoffice
        }

        setName('');
        setActor('');
        setDescription('');
        setDate('');
        setBoxoffice('');
        setImage('');

        onStateChange(newMovie)
    }
    

    return(
        <form onSubmit={addBondSubmit} className="form">
            <h2 className="form__header">Add a movie</h2>
            <label className="form__label">
                Film Title:
                <input id="film-title" type="text" value={name || ''} onChange={e => setName(e.target.value)} className="input" />
            </label> 
            <label className="form__label">
                Actor:
                <input id="film-actor" type="text" value={actor || ''} onChange={e => setActor(e.target.value)} className="input" />
            </label> 
            <label className="form__label">
                Release Date:
                <input id="film-date" type="text" value={date || ''} onChange={e => setDate(e.target.value)} className="input" />
            </label> 
            <label className="form__label">
                Box Office Takings:
                <input id="film-box-office" type="text" value={boxoffice || ''} onChange={e => setBoxoffice(e.target.value)} className="input" />
            </label> 
            <label className="form__label form__label--imageurl">
                Image URL:
                <input id="film-image" type="text" value={image || ''} onChange={e => setImage(e.target.value)} className="input" />
            </label> 
            <label className="form__label form__label--description">
                Description:
                <textarea id="film-description" onChange={e => setDescription(e.target.value)} value={description || ''} rows="5" className="textarea" />
            </label>  
            <input className="button form__submit" type="submit" value="Submit" />
        </form>
    );
}

export default Form;