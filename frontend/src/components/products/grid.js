import React, {
  Component
} from 'react';
import axios from 'axios';

class Grid extends Component{
    constructor() {
      super();
      this.state = {
          products: []
      };
      this.getData();
    }

    getData() {
        axios.get('http://localhost:8000/products/')
            .then((res) => {
                if (res.status == 200) {
                    this.setState({
                        products: res.data.map(item => {
                            return {
                                ...item,
                                link: `/itemPage/${item.slug}`
                            };
                        })
                    });
                } else if (res.status == 500) {
                    alert("Failed to process requisition")
                }
            })
    }

    // Handles add to cart button press
    addToCart() {
      // Gets the login id from sessionStorage, null means that user isn't logged.
      let logID = sessionStorage.getItem('@login/id');
      // Checks if the user is logged in
      if (logID) {
        // Stores that an item should be added and go to cart page.
        let addItem = 1;
        sessionStorage.setItem('@item/shouldAdd', addItem);
        window.location.href = "/cart";
      } else
        alert("Please log in!");
    }

    // Stores a single item Thumbnail template.
    itemPreview(itemData){
        return(
            <div class="col">
                <div class="card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                    </svg>

                    <div class="card-body">
                        <p class="card-text">{itemData.name}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <a href={itemData.link}><button type="button" class="btn btn-sm btn-outline-secondary">View</button></a>
                                <button type="button" onClick={() => this.addToCart()} class="btn btn-sm btn-outline-secondary">Add to cart</button>
                            </div>
                            <h5><small class="text-primary">R${itemData.price}</small></h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render(){
        return(
            <div class="album py-5 bg-light">
                <div class="container">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {this.state.products.map(product => this.itemPreview(product))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Grid;
