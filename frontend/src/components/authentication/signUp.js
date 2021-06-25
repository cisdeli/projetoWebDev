import React, {
  Component
} from 'react';

import '../../css/login_signup.css';

import mockCreds from './mockCredentials'

class SignUp extends Component{
    constructor() {
      super();
      // Stores user input (superrr secure)
      this.state = {
        name: '',
        email: '',
        password: '',
        repassword: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
    handleSubmit(event) {
      event.preventDefault();
      // window.location.href = "/";
      console.log(this.checkInput());
    }

    // Just checks if the input is ok, it does not register the input anywhere because the backend isn't ready yet.
    checkInput() {
      // Looping through clients
      if (this.state.password != this.state.repassword){
          alert("Passwords don't match!");
          return -1;
      }
      else {
        let clients = mockCreds.clients;
        let adm = mockCreds.adm;

        for (var i = 0; i < clients.length; i++) {
          var obj = clients[i];
          if (obj.email == this.state.email){
              alert("Email is already registered");
              return -1;
          }
        }
        //Looping through adms
        for (var i = 0; i < adm.length; i++) {
          var obj = adm[i];
          if (obj.email == this.state.email){
              alert("Email is already registered");
              return -1;
          }
        }
      }
      alert("Successfully Registered Account (kinda =P, no backend =P)");
      return 1;
    }

    render(){
        return(
            <div class="container py-4">
                <main class="form-signin text-center">
                    <form onSubmit={this.handleSubmit}>
                      <h1 class="h3 mb-3 fw-normal">Register</h1>
                      <div class="form-floating">
                        <input name="name" type="text" class="form-control" id="Name" placeholder="name@example.com" onChange={this.handleChange} required/>
                        <label for="floatingInput">Name</label>
                      </div>
                      <div class="form-floating">
                        <input name="email" type="email" class="form-control" id="Email" placeholder="name@example.com" onChange={this.handleChange} required/>
                        <label for="floatingInput">Email address</label>
                      </div>
                      <div class="form-floating">
                        <input name="password" type="password" class="form-control" id="Password" placeholder="Password" onChange={this.handleChange} required/>
                        <label for="floatingPassword">Password</label>
                      </div>
                      <div class="form-floating">
                        <input name="repassword" type="password" class="form-control" id="RePassword" placeholder="Password" onChange={this.handleChange} required/>
                        <label for="floatingPassword">Re-enter password</label>
                      </div>
                      <div class="mb-3">
                        <a href="/login">Already have an account? Log in!</a>
                      </div>
                      <button class="w-100 btn btn-lg btn-dark" type="submit">Sign up</button>
                    </form>
                </main>
            </div>
        );
    }
}

export default SignUp;
