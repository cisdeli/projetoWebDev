import React, {
  Component
} from 'react';
import axios from 'axios';

import '../../css/checkout.css';

import cart from '../../images/logos/cart.svg'

class Checkout extends Component{
    constructor() {
      super();
      this.arr = JSON.parse(sessionStorage.getItem('@login/productArr'));
      this.total = 0;
      // Stores user input (not secure at all please read the Comment topic in README)
      this.state = {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        state: '',
        city: '',
        cep: '',
        nameOnCard: '',
        cardNumber: '',
        expiration: '',
        cvv: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Gets input
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // Controls what happens when submit button is pressed.
    handleSubmit(event) {
        event.preventDefault();

        const newForm = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            address: this.state.address,
            state: this.state.state,
            city: this.state.city,
            cep: this.state.cep,
            nameOnCard: this.state.nameOnCard,
            cardNumber: this.state.cardNumber,
            expiration: this.state.expiration,
            cvv: this.state.cvv,
        }
        // Checks input data when submit button is pressed.
        axios.post('http://localhost:8000/checkout/', newForm)
            .then((res) => {
                if(res.status == 200)
                    alert("Error, make sure that your fields are in the correct format!")
                else if(res.status == 201){
                    alert("Sucessful Checkout, thank you!")
                    //remove cart items
                    // window.location.href = "/";
                }
                else if(res.status == 500){
                    alert("Failed to process requisition!")
                }

            })

        var items = new Array();
        for(var i = 0; i < this.arr.length; i++)
            items.push({quantity: this.arr[i].quantity, price: this.arr[i].price, product: this.arr[i].id});
        const newOrder = {
            customer: sessionStorage.getItem('@login/id'),
            items: items,
            totalPrice: this.total
        };
        axios.post('http://localhost:8000/orders/', newOrder)
            .then((res) => {
                if(res.status == 200){
                    alert("Sucessful order, thank you!")
                    var arr = new Array();
                    sessionStorage.setItem('@login/productArr', JSON.stringify(arr))
                    window.location.href = "/";
                }
                else if(res.status == 500){
                    alert("Failed to process requisition!")
                }
            })


    }

    // Stores a single item in cart
    itemInCart(itemData){
        return(
            <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 class="my-0">{itemData.quantity} x {itemData.name}</h6>
                </div>
                <span class="text-muted">R$ {itemData.price * itemData.quantity}</span>
            </li>
        );
    }

    // Returns the total template.
    addTotal(){
        this.total = 0;
        for(var i = 0; i < this.arr.length; i++)
            this.total += (this.arr[i].price * this.arr[i].quantity);
        return(
            <li class="list-group-item d-flex justify-content-between">
                <span>Total (BRL)</span>
                <strong>R$ {this.total}</strong>
            </li>
        );
    }

    render(){
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
                            {this.arr.map((product) => this.itemInCart(product))}
                            {this.addTotal()}
                        </ul>
                    </div>
                    <div class="col-md-7 col-lg-8">
                        <h4 class="mb-3">Shipping address</h4>
                        <form class="" onSubmit={this.handleSubmit}>
                            <div class="row g-3">
                                <div class="col-sm-6">
                                    <label for="firstName" class="form-label">First name</label>
                                    <input type="text" class="form-control" name="firstName" onChange={this.handleChange} required />
                                </div>

                                <div class="col-sm-6">
                                    <label for="lastName" class="form-label">Last name</label>
                                    <input type="text" class="form-control" name="lastName" onChange={this.handleChange} required />
                                </div>

                                <div class="col-12">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control" name="email" placeholder="you@example.com" onChange={this.handleChange}/>
                                </div>
                                <div class="col-12">
                                    <label for="address" class="form-label">Address</label>
                                    <input type="text" class="form-control" name="address" placeholder="1234 Main St" onChange={this.handleChange} required />
                                </div>

                                <div class="col-md-4">
                                    <label for="state" class="form-label">State</label>
                                    <input type="text" class="form-control" name="state" placeholder="State (Initials)" onChange={this.handleChange} required />
                                </div>

                                <div class="col-md-5">
                                    <label for="city" class="form-label">City</label>
                                    <input type="text" class="form-control" name="city" onChange={this.handleChange} required />
                                </div>

                                <div class="col-md-3">
                                    <label for="zip" class="form-label">CEP</label>
                                    <input type="number" class="form-control" name="cep" placeholder="" onChange={this.handleChange} required />
                                </div>
                            </div>

                            <hr class="my-4" />

                            <h4 class="mb-3">Payment</h4>

                            <div class="row gy-3">
                                <div class="col-md-6">
                                    <label for="cc-name" class="form-label">Name on card</label>
                                    <input type="text" class="form-control" name="nameOnCard" placeholder="" onChange={this.handleChange} required />
                                    <small class="text-muted">Full name as displayed on card</small>
                                </div>

                                <div class="col-md-6">
                                    <label for="cc-number" class="form-label">Credit card number</label>
                                    <input type="number" class="form-control" name="cardNumber" placeholder="" onChange={this.handleChange} required />
                                </div>

                                <div class="col-md-3">
                                    <label for="cc-expiration" class="form-label">Expiration</label>
                                    <input type="text" class="form-control" name="expiration" placeholder="" onChange={this.handleChange} required />
                                </div>

                                <div class="col-md-3">
                                    <label for="cc-cvv" class="form-label">CVV</label>
                                    <input type="number" class="form-control" name="cvv" placeholder="" onChange={this.handleChange} required />
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
}

export default Checkout;
