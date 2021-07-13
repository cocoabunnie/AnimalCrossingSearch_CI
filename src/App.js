import React from "react";
import { BrowserRouter, Route, Link  } from "react-router-dom";
import './App.css';

import Home from "./Components/Home";
import Saved from "./Components/Saved";
import About from "./Components/About";

export default class App extends React.Component {

  render() {
    //const { users } = this.state;
    return (
      <div>
        <BrowserRouter>
        <div className="navBar">
          <Link className="navMenu" to="/">Home</Link>
          <Link className="navMenu" to="/saved">Saved</Link>
          <Link className="navMenu" to="/about">About</Link>
        </div>

        <Route exact path = "/">
          <Home/>
        </Route>

        <Route path = "/saved">
          <Saved/>
        </Route>
        
        <Route path = "/about">
          <About/>
        </Route>
        </BrowserRouter>
      </div>
    );
  }
}
