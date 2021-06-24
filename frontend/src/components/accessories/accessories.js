import React from "react";
import '../../css/accessories.css';

import Grid from "../products/grid";


const Accessories = () => (
    <div>
        <div id="accPhoto">
            <section class="py-5 text-center container">
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <h1 class="fw-light text-white">Custom Accessories</h1>
                        <p class="lead fs-5 text-white">Here you will find a variety of items for your loved ones.
                            <br />For the ones who really care about their pets
                            <br />Only the crème de la crème for your little puppies and kittens
                        </p>
                    </div>
                </div>
            </section>
        </div>
        <Grid />
    </div>
);

export default Accessories;
