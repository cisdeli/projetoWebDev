import React from "react";
import '../../css/logos.css';
import '../../css/headers.css';

import pawLogo from '../../images/logos/paw.svg'
import shopDoPet from '../../images/logos/Shop-do-Pet.svg'
import cart from '../../images/logos/cart.svg'

import mockCreds from '../authentication/mockCredentials'

// Handle login NOT SAFE AT ALL DON'T USE ANY REAL PERSONAL INFO
var logID = sessionStorage.getItem('@login/id');
var name = "";
var isADM = 0;
// console.log("id loggado  = "+ logID);
function getName(){
    let clients = mockCreds.clients;
    let adm = mockCreds.adm;
    //Looping through clients
    for (var i = 0; i < clients.length; i++) {
      var obj = clients[i];
      if(obj.id == logID)
        name = obj.name;
    }
    //Looping through adms
    for (var i = 0; i < adm.length; i++) {
      var obj = adm[i];
      if(obj.id == logID){
          name = obj.name;
          isADM = 1;
      }
    }
}
getName();

function Header(){
    function logOut(){
        sessionStorage.removeItem('@login/id');
        name = "";
        isADM = 0;
        window.location.href = "/";
    }

    return(
        <header class="p-3 bg-info text-white">
            <div class="container">
                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <span class="bi me-2" width="40" height="32" role="img" aria-label="Logo">
                            <img id="headerLogo" src={pawLogo} />
                        </span>
                    </a>

                    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="/" class="nav-link px-2">Home</a></li>
                        <li><a href="/accessories" class="nav-link px-2">Accessories</a></li>
                        <li><a href="/cats" class="nav-link px-2">Cats</a></li>
                        <li><a href="/dogs" class="nav-link px-2">Dogs</a></li>
                    </ul>

                    <img class="navbar-brand d-none d-xl-block" src={shopDoPet} alt="Shop do Pet Logo" />
                    {logID ? (
                        <div class="text-end">
                            {isADM ? (
                                <a href="/adm"><h7 class="me-2 text-danger fw-bold">{name}</h7></a>
                            ):(
                                <h7 class="me-2 text-white fw-bold">{name}</h7>
                            )}
                            <a href="/cart"><button type="button" class="btn btn-outline-info me-2"><img src={cart} id="cartLogo"/></button></a>
                            <button type="button" class="btn btn-dark" onClick={() => logOut()}>Log out</button>
                        </div>
                    ) : (
                        <div class="text-end">
                            <a href="/login"><button type="button" class="btn btn-outline-light me-2">Login</button></a>
                            <a href="/signup"><button type="button" class="btn btn-dark">Sign up</button></a>
                        </div>
                    )}

                </div>
            </div>
        </header>
    );
}

export default Header;
