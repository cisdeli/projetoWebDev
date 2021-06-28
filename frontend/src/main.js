import React from "react";
import { Switch, Route } from 'react-router-dom'

import Home from "./components/home/home";
import About from "./components/about/about";
import Accessories from "./components/accessories/accessories";
import Adm from "./components/authentication/adm";
import Cart from "./components/cartCheckout/cart";
import Cats from "./components/cats/cats";
import Checkout from "./components/cartCheckout/checkout";
import Dogs from "./components/dogs/dogs";
import Item from "./components/products/itemPage";
import Login from "./components/authentication/login";
import SignUp from "./components/authentication/signUp";
import UniqueFeat from "./components/products/uniqueFeat";

const Main = () => (
  <main>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/accessories' component={Accessories}/>
        <Route path='/adm' component={Adm}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/cats' component={Cats}/>
        <Route path='/checkout' component={Checkout}/>
        <Route path='/dogs' component={Dogs}/>
        <Route path='/itemPage' component={Item}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/uniqueFeat' component={UniqueFeat}/>
    </Switch>
  </main>
);

export default Main;
