import React from "react";

import '../../css/login_signup.css';


const Login = () => (
    <div class="container py-4">
        <main class="form-signin text-center">
            <form>
                <h1 class="h3 mb-3 fw-normal">Login</h1>
                <div class="form-floating">
                    <input type="email" class="form-control" id="Name" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="RePassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>
                <div class="mb-3">
                    <a href="sign_up.html">Not registered yet? Sign up!</a>
                </div>
                <button class="w-100 btn btn-lg btn-dark" type="submit">Sign in</button>
            </form>
        </main>
    </div>
);

export default Login;
