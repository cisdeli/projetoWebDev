import React, {
  Component
} from 'react';
import axios from 'axios';

import '../../css/itemPage.css';
import dog from '../../images/uniqueFeat/dogWithTag.jpg'

class UniqueFeat extends Component{
    constructor() {
        super();
        // Stores user input
        this.addItem = 0;
        this.state = {
            name: "",
            description: "",
            price: "",
            quantity: 0,
            image: "https://image.flaticon.com/icons/png/512/5066/5066559.png",
            format: "Bone",
            clicks: 1,
            show: true
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // Functions that increase and decrease quantity
    IncrementItem = () => {
      this.setState({
        clicks: this.state.clicks + 1
      });
    }
    DecreaseItem = () => {
      if (this.state.clicks > 1)
        this.setState({
          clicks: this.state.clicks - 1
        });
    }
    handleChange(e) {
        this.setState({
            format: e.target.value
        });
    }

    // Handles add to cart button press
    handleSubmit(event) {
      event.preventDefault();
      // Gets the login id from sessionStorage, null means that user isn't logged.
      let logID = sessionStorage.getItem('@login/id');
      // Checks if the user is logged in
      if (logID) {
        // Stores an item and go somewhere.
        this.handleFormat();
        var arr = JSON.parse(sessionStorage.getItem('@login/productArr'))
        arr.push({
            name: "Custom Collar " +"- "+ this.state.format,
            price: "6.99",
            image:this.state.image,
            quantity: this.state.clicks});
        sessionStorage.setItem('@login/productArr', JSON.stringify(arr))
        alert("Item added to cart!");
        // window.location.href = "/cart";
      } else
        alert("Please log in!");
    }

    handleFormat() {
        if (this.state.format == "Bone")
            this.state.image = "https://image.flaticon.com/icons/png/512/5066/5066559.png"
        else if (this.state.format == "Heart")
            this.state.image = "https://image.flaticon.com/icons/png/512/932/932841.png"
        else if (this.state.format == "Paw")
            this.state.image = "https://image.flaticon.com/icons/png/512/1152/1152776.png"
        else if (this.state.format == "Tag")
            this.state.image = "https://image.flaticon.com/icons/png/512/1237/1237606.png"
    }

    render() {
        return(
            <div class="container">
                <div class="cardItem">
                    <div class="container-fliud">
                        <div class="wrapper row">
                            <div class="preview col-md-6">
                                <div class="tab-content">
                                    <div class="tab-pane active" id="pic-1"><img src={dog} /></div>
                                </div>
                            </div>
                            <div class="details col-md-6">
                                <h3 class="product-title">Custom Tag</h3>
                                <p class="product-description">Want your pet with something unique? Try out our pet tag personalization, you can choose between all this models, make your pet feel special as they are :)</p>
                                <h4 class="price">price: <span class="text-primary">$6.99</span></h4>
                                <h5 class="colors py-2">options:
                                <select id="formats" class="form-select" aria-label="Default select example" onChange={this.handleChange}>
                                  <option selected value="Bone">Bone</option>
                                  <option value="Heart">Heart</option>
                                  <option value="Paw">Paw</option>
                                  <option value="Tag">Tag</option>
                                </select>
                                </h5>
                                <h5 class="sizes">quantity:
                                    <div class="d-flex flex-row align-items-center qty">
                                        <button id="btn" onClick={this.DecreaseItem}><i class="fa fa-minus text-danger"></i></button>
                                        <h5 class="text-grey mt-1 mr-1 ml-1">{this.state.clicks}</h5>
                                        <button id="btn" onClick={this.IncrementItem}><i class="fa fa-plus text-success"></i></button>
                                    </div>
                                </h5>
                                <div class="action">
                                    <button class="add-to-cart btn btn-primary" type="button" onClick={this.handleSubmit}>add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UniqueFeat;
