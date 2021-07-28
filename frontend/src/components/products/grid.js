import React, {
  Component
} from 'react';
import axios from 'axios';

import '../../css/grid.css';

class Grid extends Component{
    constructor({category}) {
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

    // Stores a single item Thumbnail template.
    itemPreview(itemData){
        return(
            <div class="col">
                <div class="card shadow-sm">
                    <div class="embed-responsive embed-responsive-16by9">
                       <img alt="Card image cap" class="card-img-top embed-responsive-item" src={itemData.image} />
                    </div>
                    <div class="card-body">
                        <p class="card-text">{itemData.name}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <a href={itemData.link}><button type="button" class="btn btn-sm btn-outline-secondary">View</button></a>
                            </div>
                            <h5><small class="text-primary">R${itemData.price}.00</small></h5>
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
                        {this.state.products.filter(product => product.category === this.props.category).map(product => this.itemPreview(product))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Grid;
