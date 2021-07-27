import React from "react";
import '../../css/cats.css';

import Grid from "../products/grid";

// Simply returns the html used for the top banner, the product grid has its own component in "products"
const Cats = () => (
    <div>
        <div id="catPhoto">
            <section class="py-5 text-center container">
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <h1 class="fw-light text-white">Cat Products</h1>
                        <p class="lead fs-5 text-white">Here you will find a variety of items for your cats
                            <br />From cat food to scratchers
                            <br />Make your kitty the cutest of the kittens with our costumes
                        </p>
                    </div>
                </div>
            </section>
        </div>
        <Grid category="cats"/>
    </div>
);

export default Cats;
