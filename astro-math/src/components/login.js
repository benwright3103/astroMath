import React, { Component } from 'react';
import amlogo from '../img/amlogo.svg';

class Login extends Component {
  render(){
    return(
      <div className="login-form">

        <div className="login-form-main">
          <img className="App-logo" src={amlogo} alt="logo" />
              <h1>Hello Space Cadet! What is your name?</h1>
              <input type="text" name="" value="Enter Your Name" />
        </div>


      </div>
    );
  }
}

export default Login;
