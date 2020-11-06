import React from "react";

import Home from "./pages/Home.js";
import Rooms from "./pages/Rooms";
import SingleRooms from "./pages/SingleRooms";
import Error from "./pages/Error";

import "./App.css"; 
import { Route, Switch } from "react-router-dom";

import Navbar from "./Components/Navbar"

function App() {
  return(
      <div>
      <Navbar/>
      <Switch>
      <Route exact path ="/" component={Home}/>
      <Route exact path ="/rooms" component={Rooms}/>
      <Route exact path ="/rooms/:slug" component={SingleRooms}/>
      <Route component={Error}/>
      </Switch>
      </div>
  )
} 

export default App;
