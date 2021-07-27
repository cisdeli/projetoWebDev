import React, {
  Component
} from 'react';
import axios from 'axios';

import '../../css/itemPage.css';
import dog from '../../images/uniqueFeat/dogWithTag.jpg'

import bone from '../../images/uniqueFeat/bone-solid.svg'
import circle from '../../images/uniqueFeat/circle-solid.svg'
import fish from '../../images/uniqueFeat/fish-solid.svg'
import paw from '../../images/logos/paw.svg'
import tag from '../../images/uniqueFeat/tag-solid.svg'

class UniqueFeat extends Component{
    constructor() {
      super();
      // Stores user input
      this.addItem = 0;
      this.state = {
        clicks:1,
        show:true
      };
      this.handleSubmit = this.handleSubmit.bind(this);
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

    // Handles add to cart button press
    handleSubmit(event) {
      event.preventDefault();
      // Gets the login id from sessionStorage, null means that user isn't logged.
      let logID = sessionStorage.getItem('@login/id');
      // Checks if the user is logged in
      if (logID) {
        // Stores that an item should be added and go to cart page.
        this.addItem = 1;
        sessionStorage.setItem('@item/shouldAdd', this.addItem);
        window.location.href = "/cart";
      } else
        alert("Please log in!");
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
                                <p class="product-description">Want your pet with something unique? Try out our pet tag personalization, you can choose between all this models and put your pet's name on it, make your pet feel special as they are :)</p>
                                <h4 class="price">price: <span class="text-primary">$49.99</span></h4>
                                <h5 class="colors py-2">options:
                                    <img src={bone} alt="" width="40px" class="color formats"/>
                                    <img src={circle} alt="" width="40px" class="color formats"/>
                                    <img src={fish} alt="" width="40px" class="color formats"/>
                                    <img src={paw} alt="" width="40px" class="color formats"/>
                                    <img src={tag} alt="" width="40px" class="color formats"/>
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
