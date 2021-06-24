import React from "react";

import uspLogo from '../../images/logos/usp_logo.svg'

//fix usp logo position.
const About = () => (
    <div class="container py-4">
        <header class="pb-3 mb-4 border-bottom">
            <div class="d-flex align-items-center text-dark text-decoration-none">
                <span class="fs-4">About Shop do Pet</span>
            </div>
        </header>

        <div class="row align-items-md-stretch">
            <div class="col-md-6">
                <h1 class="fs-4">Who are we?</h1>
                <p>We are a group of Computer Science students from University of São Paulo - USP, campus São Carlos. Our names are: Dennis Green, Filipe Oliveira, Gabriel Rosati and Pedro Cisdeli.</p>
                <h1 class="fs-4">Purpose</h1>
                <p><i>Shop do Pet</i> is a group assignment from Introduction to Web Development classes that seeks to familiarize students with programming for web platforms by teaching languages such as: HTML, CSS, JavaScript, among others.</p>
                <h1 class="fs-4">Our Goals</h1>
                <p>Develop a usefull website that emulates an online Pet Shop.</p>
            </div>
            <div class="col-md-6">
                <span class="bi me-2" width="150" height="130" role="img" aria-label="Logo">
                    <img src={uspLogo} width="200" />
                </span>
            </div>
        </div>
    </div>

);


export default About;
