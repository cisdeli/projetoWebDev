import React, {
  Component
} from 'react';

import '../../css/login_signup.css';

// Importing the json file that contains the mock credentials.
import mockCreds from './mockCredentials'

class Login extends Component{
    constructor() {
      super();
      // Stores user input (not secure at all please read the Comment topic in README)
      this.state = {
        email: '',
        password: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Gets input
    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
    // Controls what happens when submit button is pressed.
    handleSubmit(event) {
      event.preventDefault();

      let success = this.checkInput();
      // Checks if the log in attempt was succesful.
      if (success == -1)
        alert("Unsuccesful login");
      else {
        // Stores log in ID.
        sessionStorage.setItem('@login/id', success);
        // Checks if is a client or an adm by its ID.
        if (!(success % 2))
          window.location.href = "/";
        else if (success % 2)
          window.location.href = "/adm";
      }
    }

    // Checks email;psw pair in the json file.
    checkInput(){
        let clients = mockCreds.clients;
        let adm = mockCreds.adm;
        //Looping through clients
        for (var i = 0; i < clients.length; i++) {
          var obj = clients[i];
          if (obj.email == this.state.email && obj.password == this.state.password)
            return obj.id;
        }
        //Looping through adms
        for (var i = 0; i < adm.length; i++) {
          var obj = adm[i];
          if (obj.email == this.state.email && obj.password == this.state.password)
            return obj.id;
        }
        return -1;
    }


    render(){
        return (
            <div class="container py-4">
                <main class="form-signin text-center">
                    <form onSubmit={this.handleSubmit}>
                        <h1 class="h3 mb-3 fw-normal">Login</h1>
                        <div class="form-floating">
                            <input name="email" type="email" class="form-control" id="Email" placeholder="name@example.com" onChange={this.handleChange} required/>
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                            <input name="password" type="password" class="form-control" id="Password" placeholder="Password"  onChange={this.handleChange} required/>
                            <label for="floatingPassword">Passwords</label>
                        </div>
                        <div class="mb-3">
                            <a href="/signup">Not registered yet? Sign up!</a>
                        </div>
                        <button class="w-100 btn btn-lg btn-dark" type="submit">Sign in</button>
                    </form>
                </main>
            </div>
        );
    }
}

export default Login;
