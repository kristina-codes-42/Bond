import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
       <nav className="nav">
           <Link to="/">Home</Link>
           <Link to="/favourites">Favourites</Link>
       </nav>
    );

}

export default Nav;