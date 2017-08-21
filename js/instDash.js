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
  var classID = 'fall2017';
  var query = firebase.database().ref("students/"+classID+'/').orderByKey();
    query.once("value")
    .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
      var key = childSnapshot.key;
      // childData will be the actual contents of the

    });

}());
