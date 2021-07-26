import React, {
  Component
} from 'react';
import axios from 'axios';

import '../../css/login_signup.css';

class SignUp extends Component{
    constructor() {
      super();
      // Stores user input (not secure at all please read the Comment topic in README)
      this.state = {
        name: '',
        email: '',
        password: '',
        repassword: ''
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

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        }
        // Checks input data when submit button is pressed.
        if (this.checkInput()) {
            axios.post('http://localhost:8000/customers/', newUser)
                .then((res) => {
                    if(res.status == 202)
                        alert("Email already in use!")
                    else if(res.status == 201){
                        alert("Sucessful sign up! Please log in")
                        window.location.href = "/login";
                    }
                    else if(res.status == 200){
                        alert("Error, make sure that your name has at least 3 letters!")
                    }

                })
        }
    }
    // Just checks if the input is ok, it does not register the input anywhere because the backend isn't ready yet.
    checkInput() {
      // Checks if psws are equal
      if (this.state.password != this.state.repassword){
          alert("Passwords don't match!");
          return 0;
      }
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
