import React from "react";
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Favourites from './Favourites';
import Error from './Error';
import Header from './Header/Header';
import Nav from './Nav/Nav';


const App = () => {
  return (
    <div className="App"> 
        <Header />
        <div className="container">
          <Nav />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/favourites" component={Favourites} />
            <Route component={Error} />
          </Switch>
        </div>

      
    </div>
  );
}

export default App;
