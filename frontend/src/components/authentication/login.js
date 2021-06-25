import React, {
  Component
} from 'react';

import '../../css/login_signup.css';

import mockCreds from './mockCredentials'

class Login extends Component{
    constructor() {
      super();
      // Stores user input (superrr secure)
      this.state = {
        email: '',
        password: ''
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

      let success = this.checkInput()
      if (success == -1)
        alert("Unsuccesful login");
      else {
        if (!(success % 2))
          sessionStorage.setItem('@login/id', success);
        else if (success % 2)
          sessionStorage.setItem('@login/id', success);
        window.location.href = "/";
      }
    }
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
