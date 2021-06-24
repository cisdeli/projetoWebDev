import React from "react";
import '../../css/itemPage.css';

import cat from '../../images/cats/catBanner.jpg'

const Item = () => (
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
                        <h3 class="product-title">Template</h3>
                        <p class="product-description">Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <h4 class="price">price: <span class="text-primary">$180</span></h4>
                        <h5 class="sizes">sizes:
                            <span class="size" data-toggle="tooltip" title="small">s</span>
                            <span class="size" data-toggle="tooltip" title="medium">m</span>
                            <span class="size" data-toggle="tooltip" title="large">l</span>
                            <span class="size" data-toggle="tooltip" title="xtra large">xl</span>
                        </h5>
                        <h5 class="colors">colors:
                            <span class="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                            <span class="color green"></span>
                            <span class="color blue"></span>
                        </h5>
                        <h5 class="sizes">quantity:
                            <div class="d-flex flex-row align-items-center qty">
                                <button id="btn"><i class="fa fa-minus text-danger"></i></button>
                                <h5 class="text-grey mt-1 mr-1 ml-1">2</h5>
                                <button id="btn"><i class="fa fa-plus text-success"></i></button>
                            </div>
                        </h5>
                        <div class="action">
                            <button class="add-to-cart btn btn-primary" type="button">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Item;
