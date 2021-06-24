import React from "react";

import '../../css/login_signup.css';


const SignUp = () => (
    <div class="container py-4">
        <main class="form-signin text-center">
            <form>
              <h1 class="h3 mb-3 fw-normal">Register</h1>
              <div class="form-floating">
                <input type="text" class="form-control" id="Name" placeholder="name@example.com"/>
                <label for="floatingInput">Name</label>
              </div>
              <div class="form-floating">
                <input type="email" class="form-control" id="Email" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
                <input type="password" class="form-control" id="Password" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
              </div>
              <div class="form-floating">
                <input type="password" class="form-control" id="RePassword" placeholder="Password"/>
                <label for="floatingPassword">Re-enter password</label>
              </div>
              <div class="mb-3">
                <a href="login.html">Already have a registration? Log in!</a>
              </div>
              <button class="w-100 btn btn-lg btn-dark" type="submit">Sign up</button>
            </form>
        </main>
    </div>
);

export default SignUp;
