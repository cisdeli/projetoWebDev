import React, {
  Component
} from 'react';
import axios from 'axios'
import '../../css/login_signup.css';

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
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        axios.get('http://localhost:8000/customers/authenticate/' + user.email + '/' + user.password)
            .then((res) => {
                if (res.status == 200)
                    alert("Email or password are not valid!")
                else if (res.status == 201) {
                    // alert("Sucessful log in! Enjoy Shop Do Pet")
                    const userData = res.data.data;
                    sessionStorage.setItem('@login/id', userData._id);
                    sessionStorage.setItem('@login/name', userData.name);
                    if (userData.roles == 'user'){
                        window.location.href = "/";
                    }
                    else if (userData.roles == 'admin'){
                        sessionStorage.setItem('@login/isADM', 1);
                        window.location.href = "/adm";
                    }
                } else if (res.status == 500) {
                    alert("Failed to process requisition!")
                }
            })
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
