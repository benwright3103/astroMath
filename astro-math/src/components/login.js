import React, {Component} from 'react';
var firebase = require('firebase');

var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""

  };
  firebase.initializeApp(config);

//begin component
class Login extends Component {
  //login function
  login(event){
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password)

    promise.then(user =>{
      var lout = document.getElementById('logout');
      lout.classList.remove('hide');
    });

    promise.catch(e=>{
      var err = e.message;
      console.log(err);
      this.setState({err: err})
    });
  }

  //signup function
signup(){
  const email = this.refs.email.value;
  const password = this.refs.password.value;
  const auth = firebase.auth();

  const promise = auth.createUserWithEmailAndPassword(email,password);

  promise
  .then(user =>{
    var err = "welcome " + user.email;
    firebase.database().ref('users/'+user.uid).set({
      email:user.email
    });
    console.log(user);
    this.setState({err:err});
  });
  promise.catch(e=>{
    var err = e.message;
    console.log(err);
    this.setState({err:err});
  });

}

//logout
logout(){
  firebase.auth().signOut();

  var lout = document.getElementById('logout');
  lout.classList.add('hide');
}

//google login credentials
google(){
  console.log("I am in google")

  var provider = new firebase.auth.GoogleAuthProvider();
  var promise = firebase.auth().signInWithPopup(provider);

  promise.then(result=>{
    var user = result.user;
    console.log(result);
    firebase.database().ref('users/'+user.uid).set({
      email: user.email,
      name: user.displayName

    });
  });
  promise.catch(e =>{
    var msg = e.message;
    console.log(msg);
  });
}

constructor(props){
  super(props);

  this.state = {
    err: ''

  };
  this.login = this.login.bind(this);
  this.signup = this.signup.bind(this);
  this.logout = this.logout.bind(this);
  this.google = this.google.bind(this);
}

  render(){
    return(
      <div>
            <input id="email" ref="email" type="email" placeholder="enter your email" /><br />
            <input id="pass" ref="password" type="password" placeholder="enter your password" /><br />
              <p>{this.state.err}</p>
            <button onClick={this.login} >Login</button>
            <button onClick={this.signup}>SignUp</button>
            <button onClick={this.logout} id="logout" className="hide" >Logout</button> <br />
            <button onClick={this.google}  className="" >Sign in with Google</button>


      </div>
    );
  }
}

export default Login;
