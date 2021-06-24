import React from "react";
import { Switch, Route } from 'react-router-dom'

import Home from "./components/home/home";
import About from "./components/about/about";
import Accessories from "./components/accessories/accessories";
import Adm from "./components/authentication/adm";
import Cats from "./components/cats/cats";
import Dogs from "./components/dogs/dogs";
import Login from "./components/authentication/login";
import SignUp from "./components/authentication/signUp";

const Main = () => (
  <main>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/accessories' component={Accessories}/>
        <Route path='/adm' component={Adm}/>
        <Route path='/cats' component={Cats}/>
        <Route path='/dogs' component={Dogs}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={SignUp}/>
    </Switch>
  </main>
);

export default Main;
