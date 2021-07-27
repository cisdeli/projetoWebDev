import React, {
  Component
} from 'react';
import axios from 'axios';

import '../../css/itemPage.css';

import cat from '../../images/cats/catBanner.jpg'

class Item extends Component{
    constructor(props) {
        super(props);
        // Stores user input
        this.addItem = 0;
        this.state = {
            name: "",
            description: "",
            price: "",
            quantity: 0,
            clicks: 1,
            show: true
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getData();
    }

    //Auxiliar functions
    hasBlankSpace(s) {
        return /\s/g.test(s);
    }

    getData(){
        const { match: { params } } = this.props;
        const slug = params.slug;
        if (!this.hasBlankSpace(slug)) {
            axios.get('http://localhost:8000/products/' + slug)
                .then((res) => {
                    if(res.status == 202)
                        alert("Product not found!")
                    else if(res.status == 200){
                        this.setState({
                            name: res.data.name,
                            description: res.data.description,
                            price: res.data.price,
                            quantity: res.data.quantity
                        });
                    }
                    else if(res.status == 500){
                        alert("Failed to process requisition")
                    }
                })
        }
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
                                    <div class="tab-pane active" id="pic-1"><img src={cat} /></div>
                                </div>
                            </div>
                            <div class="details col-md-6">
                                <h3 class="product-title">{this.state.name}</h3>
                                <p class="product-description">{this.state.description}</p>
                                <h4 class="price">price: <span class="text-primary">{this.state.price}</span></h4>
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

export default Item;
