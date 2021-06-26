import React from "react";
import '../../css/checkout.css';


import cart from '../../images/logos/cart.svg'
function Checkout(){

    function itemInCart(){
        return(
            <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 class="my-0">Name of the product</h6>
                    <small class="text-muted">Description of the product</small>
                </div>
                <span class="text-muted">$1234.56</span>
            </li>
        );
    }
    function addItemToCart(){
        let items = [], length = 0;
        length = sessionStorage.getItem('@item/itemsLength');
        for(let i = 0; i < length; i++)
            items.push(itemInCart());
        return items;
    }

    function showCartItems(){
        return (addItemToCart());
    }

    // auxiliar
    function addTotal(){
        return(
            <li class="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>$1234.56</strong>
            </li>
        );
    }

    return(
        <div class="container">
            <div class="py-5 text-center">
                <img class="d-block mx-auto mb-4" src={cart} alt="" width="72" height="57" />
                <h2>Checkout form</h2>
                <p class="lead">Thank you.</p>
            </div>

            <div class="row g-5">
                <div class="col-md-5 col-lg-4 order-md-last">
                    <h4 class="d-flex justify-content-between align-items-center mb-3">
                        <span class="text-primary">Your cart</span>
                    </h4>
                    <ul class="list-group mb-3">
                        {showCartItems()}
                        {addTotal()}
                    </ul>
                </div>
                <div class="col-md-7 col-lg-8">
                    <h4 class="mb-3">Shipping address</h4>
                    <form class="needs-validation" novalidate>
                        <div class="row g-3">
                            <div class="col-sm-6">
                                <label for="firstName" class="form-label">First name</label>
                                <input type="text" class="form-control" id="firstName" required />
                            </div>

                            <div class="col-sm-6">
                                <label for="lastName" class="form-label">Last name</label>
                                <input type="text" class="form-control" id="lastName" required />
                            </div>

                            <div class="col-12">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" placeholder="you@example.com" />
                            </div>

                            <div class="col-12">
                                <label for="address" class="form-label">Address</label>
                                <input type="text" class="form-control" id="address" placeholder="1234 Main St" required />
                            </div>

                            <div class="col-md-4">
                                <label for="state" class="form-label">State</label>
                                <select class="form-select" id="state" required>
                                    <option value="">Choose...</option>
                                    <option>California</option>
                                </select>
                            </div>

                            <div class="col-md-5">
                                <label for="city" class="form-label">City</label>
                                <input type="text" class="form-control" id="firstName" required />
                            </div>

                            <div class="col-md-3">
                                <label for="zip" class="form-label">CEP</label>
                                <input type="text" class="form-control" id="zip" placeholder="" required />
                            </div>
                        </div>

                        <hr class="my-4" />

                        <h4 class="mb-3">Payment</h4>

                        <div class="my-3">
                            <div class="form-check">
                                <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required />
                                <label class="form-check-label" for="credit">Credit card</label>
                            </div>
                            <div class="form-check">
                                <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required />
                                <label class="form-check-label" for="debit">Debit card</label>
                            </div>
                        </div>

                        <div class="row gy-3">
                            <div class="col-md-6">
                                <label for="cc-name" class="form-label">Name on card</label>
                                <input type="text" class="form-control" id="cc-name" placeholder="" required />
                                <small class="text-muted">Full name as displayed on card</small>
                            </div>

                            <div class="col-md-6">
                                <label for="cc-number" class="form-label">Credit card number</label>
                                <input type="text" class="form-control" id="cc-number" placeholder="" required />
                            </div>

                            <div class="col-md-3">
                                <label for="cc-expiration" class="form-label">Expiration</label>
                                <input type="text" class="form-control" id="cc-expiration" placeholder="" required />
                            </div>

                            <div class="col-md-3">
                                <label for="cc-cvv" class="form-label">CVV</label>
                                <input type="text" class="form-control" id="cc-cvv" placeholder="" required />
                            </div>
                        </div>

                        <hr class="my-4" />

                        <button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
