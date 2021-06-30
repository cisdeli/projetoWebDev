import '../../css/dogs.css';

import React from "react";

import Grid from "../products/grid";

// Simply returns the html used for the top banner, the product grid has its own component in "products"
const Dogs = () => (
    <div>
        <div id="dogPhoto">
            <section class="py-5 text-center container">
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <h1 class="fw-light text-white">Dog Products</h1>
                        <p class="lead fs-5 text-white">Here you will find a variety of items for your dogs
                            <br />From dog food to treats
                            <br />Making your best friend even happier to be with you
                        </p>
                    </div>
                </div>
            </section>
        </div>
        <Grid />
    </div>
);

export default Dogs;
