import React from "react";

import '../../css/adm.css';
import '../../css/logos.css';

import catProd from '../../images/adm/cat-prod.svg'
import clients from '../../images/adm/clients.svg'
import dogProd from '../../images/adm/dog-bone.svg'
import group from '../../images/adm/group.svg'
import stock from '../../images/adm/stock.svg'
import paw from '../../images/logos/paw.svg'

// Simply returns the html used for the ADM page, it can be accessed by clicking the name of the adm when logged in.
const Adm = () => (
    <div>
        <div class="container px-4 py-5">
            <h2 class="pb-2 border-bottom">Hello ADM, what do you want to do?</h2>
            <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div class="feature col">
                    <div class="feature-icon bg-primary bg-gradient">
                        <img id="icons" src={stock}/>
                    </div>
                    <h2>Manage Stock</h2>
                    <p>Control all itens in stock.</p>
                    <a href="#" class="btn btn-primary">
                        Go Now!
                    </a>
                </div>
                <div class="feature col">
                    <div class="feature-icon bg-primary bg-gradient">
                        <img id="icons" src={group}/>
                    </div>
                    <h2>Manage ADMs</h2>
                    <p>Add or remove ADMs to help you manage the store.</p>
                    <a href="#" class="btn btn-primary">
                        Go Now!
                    </a>
                </div>
                <div class="feature col">
                    <div class="feature-icon bg-primary bg-gradient">
                        <img id="icons" src={clients}/>
                    </div>
                    <h2>Manage Costumers</h2>
                    <p>Acess the costumers data and another informations.</p>
                    <a href="#" class="btn btn-primary">
                        Go Now!
                    </a>
                </div>
            </div>
        </div>
        <div class="divider"></div>
        <div class="container px-4 py-5">
            <h2 class="pb-2 border-bottom">Manage Products</h2>
            <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div class="feature col">
                    <div class="feature-icon bg-primary bg-gradient">
                        <img id="icons" src={paw}/>
                    </div>
                    <h2>Manage Acessories</h2>
                    <p>Add or remove acessories to the store.</p>
                    <a href="#" class="btn btn-primary">
                        Go Now!
                    </a>
                </div>
                <div class="feature col">
                    <div class="feature-icon bg-primary bg-gradient">
                        <img id="icons" src={dogProd}/>
                    </div>
                    <h2>Add Dog Product</h2>
                    <p>Add or remove dog products to the store.</p>
                    <a href="#" class="btn btn-primary">
                        Go Now!
                    </a>
                </div>
                <div class="feature col">
                    <div class="feature-icon bg-primary bg-gradient">
                        <img id="icons" src={catProd}/>
                    </div>
                    <h2>Add Cat Product</h2>
                    <p>Add or remove cat products to the store.</p>
                    <a href="#" class="btn btn-primary">
                        Go Now!
                    </a>
                </div>
            </div>
        </div>
        <div class="divider"></div>
    </div>
);

export default Adm;
