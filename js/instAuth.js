(function() {
  const config = {
    apiKey: "AIzaSyC0Igx9Uo-ohIodwsNI-A5LC1Ri4EJ0rxo",
    authDomain: "astromath-f0ec9.firebaseapp.com",
    databaseURL: "https://astromath-f0ec9.firebaseio.com",
    projectId: "astromath-f0ec9",
    storageBucket: "astromath-f0ec9.appspot.com",
    messagingSenderId: "679004195422"
  };
  firebase.initializeApp(config);
//Get Elements
const vCode = document.getElementById('vCode');
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');
const txtName = document.getElementById('txtName');
//add login event
btnLogin.addEventListener('click', e =>{
  //Get Email and Pass
  const email = txtEmail.value;
  const pass =  txtPassword.value;
  const auth = firebase.auth();
  //Sign in
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.then(user =>{
    location.href='file:///Users/blake/Projects/80KBV/parker-marie/astromath/dashboard.html';
  });
  promise.catch(e =>
    console.log(e.message)
  );
});
btnSignUp.addEventListener('click', e =>{
  //Get Email and Pass
  const name  = txtName.value;
  const email = txtEmail.value;
  const pass =  txtPassword.value;
  const auth = firebase.auth();
  //Sign Up
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise
  .then(user =>{
    firebase.database().ref('instructors/'+user.uid).set({
      email:user.email,
      name: name,
      isStudent: false
    });
    });
  promise.catch(e => console.log(e.message));
});
//logout a user
// btnLogout.addEventListener('click', e =>{
//   firebase.auth().signOut();
//
//
// });
//add a realtime listenr
firebase.auth().onAuthStateChanged(firebaseUser =>{
  if(firebaseUser){
    console.log(firebaseUser);
  } else{
    console.log('not logged in');
  }
});
}());