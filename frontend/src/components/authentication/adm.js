import React from "react";

import '../../css/adm.css';
import '../../css/logos.css';

// import catProd from '../../images/adm/cat-prod.svg'
import clients from '../../images/adm/clients.svg'
// import dogProd from '../../images/adm/dog-bone.svg'
import group from '../../images/adm/group.svg'
import stock from '../../images/adm/stock.svg'
// import paw from '../../images/logos/paw.svg'

// Simply returns the html used for the ADM page, it can be accessed by clicking the name of the adm when logged in.
const Adm = () => (
    <div>
        <div class="container px-4 py-5">
            <h2 class="pb-2 border-bottom">ADM Control Panel</h2>
            <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div class="feature col">
                    <div class="feature-icon bg-primary bg-gradient">
                        <img id="icons" src={stock}/>
                    </div>
                    <h2>Manage Stock</h2>
                    <p>Control all itens in stock.</p>
                    <a href="#stock" class="btn btn-primary">
                        Go Now!
                    </a>
                </div>
                <div class="feature col">
                    <div class="feature-icon bg-primary bg-gradient">
                        <img id="icons" src={group}/>
                    </div>
                    <h2>Manage Users</h2>
                    <p>Add or remove ADMs and Users .</p>
                    <a href="#users" class="btn btn-primary">
                        Go Now!
                    </a>
                </div>
                <div class="feature col">
                    <div class="feature-icon bg-primary bg-gradient">
                        <img id="icons" src={clients}/>
                    </div>
                    <h2>Manage Orders</h2>
                    <p>Search users orders.</p>
                    <a href="#orders" class="btn btn-primary">
                        Go Now!
                    </a>
                </div>
            </div>
        </div>

        <div class="divider"></div>

        <div class="container px-4 py-5">
        <h2 class="pb-2 d-flex justify-content-center border-bottom" id="stock">Stock Control</h2>
            <form id="contact-form" role="form">
                <div class="controls">
                    <div class="row py-5">
                        <div class="col-sm-4">
                            <div class="form-group">
                                <h4 class="pb-2 d-flex justify-content-center border-bottom">Search User by slug</h4>
                                <label for="form_name">Slug</label>
                                <input id="form_name" type="text" name="name" class="form-control" placeholder="Slug name" required="required"/>
                                <div class="help-block with-errors"></div>
                                <br/>
                                <button class="btn btn-lg btn-dark" type="submit">Search</button>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-group">
                                <h4 class="pb-2 d-flex justify-content-center border-bottom">Delete User by ID</h4>
                                <label for="form_id">User ID</label>
                                <input id="form_id" type="number" name="id" class="form-control" placeholder="User ID" required="required"/>
                                <div class="help-block with-errors"></div>
                                <br/>
                                <button class="btn btn-lg btn-dark" type="submit">Delete</button>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-group">
                                <h4 class="pb-2 d-flex justify-content-center border-bottom">Updated User by ID</h4>
                                <label for="form_name">User ID</label>
                                <input id="form_id" type="number" name="id" class="form-control" placeholder="User ID" required="required"/>
                                <label for="form_name">Name</label>
                                <input id="form_name" type="text" name="name" class="form-control" placeholder="User name" required="required"/>
                                <label for="form_name">Description</label>
                                <input id="form_name" type="text" name="description" class="form-control" placeholder="User description" required="required"/>
                                <label for="form_name">Price</label>
                                <input id="form_name" type="text" name="price" class="form-control" placeholder="Price" required="required"/>
                                <label for="form_name">Quantity</label>
                                <input id="form_name" type="text" name="quantity" class="form-control" placeholder="Quantity" required="required"/>
                                <label for="form_name">Slug</label>
                                <input id="form_name" type="text" name="name" class="form-control" placeholder="Slug name" required="required"/>
                                <div class="help-block with-errors"></div>
                                <br/>
                                <button class="btn btn-lg btn-dark" type="submit">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

        <div class="divider"></div>

        <div class="container px-4 py-5">
        <h2 class="pb-2 d-flex justify-content-center border-bottom" id="users">Users Control</h2>
            <form id="contact-form" role="form">
                <div class="controls">
                    <div class="row py-5">
                        <div class="col-sm-4">
                            <div class="form-group">
                                <h4 class="pb-2 d-flex justify-content-center border-bottom">Search user by ID</h4>
                                <label for="form_id">User ID</label>
                                <input id="form_id" type="number" name="id" class="form-control" placeholder="User ID" required="required"/>
                                <div class="help-block with-errors"></div>
                                <br/>
                                <button class="btn btn-lg btn-dark" type="submit">Search</button>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-group">
                                <h4 class="pb-2 d-flex justify-content-center border-bottom">Delete ser by ID</h4>
                                <label for="form_id">User ID</label>
                                <input id="form_id" type="number" name="id" class="form-control" placeholder="User ID" required="required"/>
                                <div class="help-block with-errors"></div>
                                <br/>
                                <button class="btn btn-lg btn-dark" type="submit">Delete</button>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-group">
                                <h4 class="pb-2 d-flex justify-content-center border-bottom">Updated yser by ID</h4>
                                <label for="form_name">User ID</label>
                                <input id="form_id" type="number" name="id" class="form-control" placeholder="User ID" required="required"/>
                                <label for="form_name">Name</label>
                                <input id="form_name" type="text" name="name" class="form-control" placeholder="User name" required="required"/>
                                <label for="form_name">Email</label>
                                <input id="form_name" type="email" name="email" class="form-control" placeholder="user@domain.com" required="required"/>
                                <label for="form_name">Password</label>
                                <input id="form_name" type="number" name="password" class="form-control" placeholder="Password" required="required"/>
                                <br/>
                                <button class="btn btn-lg btn-dark" type="submit">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

        <div class="divider"></div>

        <div class="container px-4 py-5">
        <h2 class="pb-2 d-flex justify-content-center border-bottom" id="orders">Orders Control</h2>
            <form id="contact-form" role="form">
                <div class="controls">
                    <div class="row py-5">
                        <div class="col-sm-4">
                        </div>
                        <div class="col-sm-4">
                            <div class="form-group">
                                <h4 class="pb-2 d-flex justify-content-center border-bottom">Search user by ID</h4>
                                <label for="form_id">User ID</label>
                                <input id="form_id" type="number" name="id" class="form-control" placeholder="User ID" required="required"/>
                                <div class="help-block with-errors"></div>
                                <br/>
                                <button class="btn btn-lg btn-dark" type="submit">Search</button>
                            </div>
                        </div>
                        <div class="col-sm-4">
                        </div>
                    </div>
                </div>
            </form>
        </div>

    </div>
);

export default Adm;
