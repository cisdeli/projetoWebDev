import React, {
  Component
} from 'react';
import axios from 'axios';

import '../../css/cart.css';
import dog from '../../images/uniqueFeat/dogWithTag.jpg'

class Cart extends Component{
    constructor(props) {
        super(props);
        this.arr = JSON.parse(sessionStorage.getItem('@login/productArr'));
    }
    // Returns Checkout button.
    addButton(){
        return(
            <div class="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
                <a href="/checkout"><button class="btn btn-primary btn-block btn-lg ml-2 pay-button" type="button">Checkout</button></a>
            </div>
        );
    }
    // Returns Cart Empty text.
    addEmpty(){
        return(
            <div class="py-5 text-center">
                <p>Your cart is empty.</p>
            </div>
        );
    }
    // Check which (Checkout button or Empty text) should be added
    addEnd(){
        // If there are items add Checkout button, if not add text empty cart.
        if(this.arr.length >= 1)
            return this.addButton();
        else
            return this.addEmpty();
    }


    // Returns html of an item template
    addItem(pos, itemData){
        return(
            <div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-2 rounded">
                <div class="mr-1">
                    <img class="rounded" src={itemData.image} width="70"/></div>
                    <div class="d-flex flex-column align-items-between product-details"><span class="font-weight-bold">{itemData.name}</span>
                </div>
                <div class="d-flex flex-row align-items-center qty">
                    <h5 class="text-grey mt-1 mr-1 ml-1">{itemData.quantity}</h5>
                </div>
                <div>
                    <h5 class="text-primary">R$ {itemData.price * itemData.quantity}</h5>
                </div>
                <div class="d-flex align-items-center">
                    <button id="btn" onClick={() => this.removeItem(pos)}><i class="fa fa-trash text-danger"></i></button>
                </div>
            </div>
        );
    }

    /*
        Super usefull thread about bind alternatives that I used to fix this function
        The problem I was having was that every time i clicked to add an item to the cart,
        the onClick event in this component would activate at the same time, which caused the item to be
        instantly removed after being added.
        https://stackoverflow.com/questions/29577977/unable-to-access-react-instance-this-inside-event-handler/41272784#41272784
    */
    // Removes item from cart length
    removeItem(pos, arrId) {
        // Updating items list
        this.arr.splice(pos, 1);
        sessionStorage.setItem('@login/productArr', JSON.stringify(this.arr))
        window.location.reload();
    }
    render(){
        return(
            <div class="container mt-5 mb-5">
                <div class="d-flex justify-content-center row">
                    <div class="col-md-8">
                        <div class="p-2">
                            <h4>Shopping cart</h4>
                        </div>
                        {this.arr.map((product, index) => this.addItem(index, product))}
                        {this.addEnd()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;
