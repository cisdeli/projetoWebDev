import React from "react";
import '../../css/cart.css';


const Cart = () => (
    <div class="container mt-5 mb-5">
        <div class="d-flex justify-content-center row">
            <div class="col-md-8">
                <div class="p-2">
                    <h4>Shopping cart</h4>
                </div>
                <div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                    <div class="mr-1"><img class="rounded" src="https://i.imgur.com/XiFJkhI.jpg" width="70"/></div>
                    <div class="d-flex flex-column align-items-center product-details"><span class="font-weight-bold">Template</span>
                        <div class="d-flex flex-row product-desc">
                            <div class="size mr-1"><span class="text-grey">Description</span></div>
                        </div>
                    </div>
                    <div class="d-flex flex-row align-items-center qty">
                        <button id="btn"><i class="fa fa-minus text-danger"></i></button>
                        <h5 class="text-grey mt-1 mr-1 ml-1">2</h5>
                        <button id="btn"><i class="fa fa-plus text-success"></i></button>
                    </div>
                    <div>
                        <h5 class="text-primary">$20.00</h5>
                    </div>
                    <div class="d-flex align-items-center">
                        <button id="btn"><i class="fa fa-trash text-danger"></i></button>
                    </div>
                </div>
                <div class="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
                    <a href="/checkout"><button class="btn btn-primary btn-block btn-lg ml-2 pay-button" type="button">Checkout</button></a>
                </div>
            </div>
        </div>
    </div>
);
 export default Cart;
