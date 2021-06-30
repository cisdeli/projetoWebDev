import React from "react";
import '../../css/jumbotron.css';

// Simply returns the html. 
const Home = () => (
    <div class="container py-4">
        <header class="pb-3 mb-4 border-bottom">
            <div class="d-flex align-items-center text-dark text-decoration-none">
                <span class="fs-4">Welcome to Shop do Pet</span>
            </div>
        </header>

        <div id="accJumbo" class="p-5 mb-4 bg-light border rounded-3">
            <div class="container-fluid py-5 text-white">
                <h1 class="display-5 fw-bold">Custom Accessories</h1>
                <p class="col-md-8 fs-4">Check out our custom acessories for your pet!</p>
                <a class="btn btn-primary" href="/accessories" role="button">Take me there</a>
            </div>
        </div>

        <div class="row align-items-md-stretch">
            <div class="col-md-6">
                <div id="catJumbo" class="h-100 p-5 bg-light text-white border rounded-3">
                    <h2>Cat items</h2>
                    <p>Shop items for your kitten.</p>
                    <a class="btn btn-primary" href="/cats" role="button">Take me there</a>
                </div>
            </div>
            <div class="col-md-6">
                <div id="dogJumbo" class="h-100 p-5 text-white bg-dark rounded-3">
                    <h2>Dog items</h2>
                    <p>Shop items for your best friend!</p>
                    <a class="btn btn-primary" href="/dogs" role="button">Take me there</a>
                </div>
            </div>
        </div>
    </div>
);

export default Home;
