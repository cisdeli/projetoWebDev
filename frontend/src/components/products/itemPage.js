import React, {
  Component
} from 'react';
import axios from 'axios';

import '../../css/itemPage.css';

import cat from '../../images/cats/catBanner.jpg'

class Item extends Component{
    constructor(props) {
        super(props);
        this.slug = "";
        // Stores user input
        this.state = {
            name: "",
            description: "",
            price: "",
            quantity: 0,
            image: "",
            id: "",
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
        this.slug = params.slug;
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
                            quantity: res.data.quantity,
                            image: res.data.image,
                            id: res.data._id
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
        // Only increment quantity if there is stock for it
        if (this.state.clicks < this.state.quantity)
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
        // Stores an item and go somewhere.
        var arr = JSON.parse(sessionStorage.getItem('@login/productArr'))
        arr.push({
            name: this.state.name,
            price: this.state.price,
            image: this.state.image,
            quantity: this.state.clicks,
            id: this.state.id
        });
        sessionStorage.setItem('@login/productArr', JSON.stringify(arr))
        alert("Item added to cart!");
        // window.location.href = "/cart";
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
                                <div class="embed-responsive embed-responsive-16by9">
                                    <img alt="Card image cap" class="card-img-top embed-responsive-item" src={this.state.image} />
                               </div>
                            </div>
                            <div class="details col-md-6">
                                <h3 class="product-title">{this.state.name}</h3>
                                <p class="product-description">{this.state.description}</p>
                                <h4 class="price">price:<span class="text-primary"> R$ {this.state.price}.00</span></h4>
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
