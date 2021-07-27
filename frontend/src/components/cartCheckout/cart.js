import React from "react";
import '../../css/cart.css';

import tempImg from "../../images/home/accessories.jpg"

function Cart(){
    // Returns Checkout button.
    function addButton(){
        return(
            <div class="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
                <a href="/checkout"><button class="btn btn-primary btn-block btn-lg ml-2 pay-button" type="button">Checkout</button></a>
            </div>
        );
    }
    // Returns Cart Empty text.
    function addEmpty(){
        return(
            <div class="py-5 text-center">
                <p>Your cart is empty.</p>
            </div>
        );
    }
    // Check which (Checkout button or Empty text) should be added
    function addEnd(){
        var length = sessionStorage.getItem('@item/itemsLength');
        // If there are items add Checkout button, if not add text empty cart.
        if(length >= 1)
            return addButton();
        else
            return addEmpty();
    }

    // Returns html of an item template
    function addItemAux(pos){
        return(
            <div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                <div class="mr-1"><img class="rounded" src={tempImg} width="70"/></div>
                <div class="d-flex flex-column align-items-center product-details"><span class="font-weight-bold">Name of the product</span>
                    <div class="d-flex flex-row product-desc">
                        <div class="size mr-1"><span class="text-grey">Description of the product</span></div>
                    </div>
                </div>
                <div class="d-flex flex-row align-items-center qty">
                    <h5 class="text-grey mt-1 mr-1 ml-1">1</h5>
                </div>
                <div>
                    <h5 class="text-primary">$1234.56</h5>
                </div>
                <div class="d-flex align-items-center">
                    <button id="btn" onClick={() => removeItem(pos)}><i class="fa fa-trash text-danger"></i></button>
                </div>
            </div>
        );
    }

    // Forms the array of items according to cart length.
    function addItem(){
        let items = [], length = 0;
        length = sessionStorage.getItem('@item/itemsLength');
        for(let i = 0; i < length; i++)
            items.push(addItemAux());
        return items;
    }

    /*
        Super usefull thread about bind alternatives that I used to fix this function
        The problem I was having was that every time i clicked to add an item to the cart,
        the onClick event in this component would activate at the same time, which caused the item to be
        instantly removed after being added.
        https://stackoverflow.com/questions/29577977/unable-to-access-react-instance-this-inside-event-handler/41272784#41272784
    */
    // Removes item from cart length
    function removeItem(pos){
        // Updating number of items.
        var length = sessionStorage.getItem('@item/itemsLength');
        length--;
        sessionStorage.setItem('@item/itemsLength', length);
        window.location.reload();
    }

    // Checks if an item was added through AddToCart buttons in Grid and ItemPages.
    function shouldAdd() {
      let hasItem = sessionStorage.getItem('@item/shouldAdd');
      let aux = hasItem;
      if (aux) {
        // Removing hasItem and shouldAdd for next addition.
        hasItem = 0;
        sessionStorage.removeItem('@item/shouldAdd');

        // Updating number of items.
        var length = sessionStorage.getItem('@item/itemsLength');
        length++;
        sessionStorage.setItem('@item/itemsLength', length);
      }
    }

    function showCartItems(){
        // Should add another item?
        shouldAdd();
        // Renders all items.
        return (addItem());
    }

    return (
        <div class="container mt-5 mb-5">
            <div class="d-flex justify-content-center row">
                <div class="col-md-8">
                    <div class="p-2">
                        <h4>Shopping cart</h4>
                    </div>
                    {showCartItems()}
                    {addEnd()}
                </div>
            </div>
        </div>
    );
}
export default Cart;
