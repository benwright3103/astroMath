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

  firebase.auth().onAuthStateChanged(firebaseUser =>{

    if(firebaseUser){


//javascript.js
var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
var highScore= 0;

//if we click on the start/reset
document.getElementById("startreset").onclick = function(){

    //if we are playing

    if(playing == true){

        location.reload(); //reload page

    }else{//if we are not playing

      var sound = new Howl({
  src: ['sounds/Clock-Started.mp3'],
  sprite: {
    blast: [0, 3500],
  }
});

// Shoot the laser!
sound.play('blast');


        console.log(sound)

        //change mode to playing

        playing = true;

        //set score to 0

        score = 0;
        document.getElementById("scorevalue").innerHTML = score;

        //show countdown box

        show("timeremaining");
        timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;

        //hide game over box

        hide("gameOver");

        //change button to reset
        document.getElementById("startreset").innerHTML = "Reset Game";

        //start countdown

        startCountdown();

        //generate a new Q&A

        generateQA();
    }

}

//Clicking on an answer box

for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
    //check if we are playing

    if(playing == true){//yes
        if(this.innerHTML == correctAnswer){
        //correct answer
        //play laser sound
        var laser = new Howl({
                  src: ['sounds/Laser-Ricochet2.mp3']
                  });

                  laser.play();
            //increase score by 1
            score++;
            document.getElementById("scorevalue").innerHTML = score;
            //hide wrong box and show correct box
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            }, 1000);


            //Generate new Q&A

            generateQA();
        }else{
        //wrong answer


            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            }, 1000);
        }
    }
}
}



//functions

//start counter

function startCountdown(){
    action = setInterval(function(){
        timeremaining -= 1;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if(timeremaining == 0){// game over
            stopCountdown();
            show("gameOver");
         document.getElementById("gameOver").innerHTML = "<p>Game over!</p><p>Your score is " + score + ".</p>";
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";
        }
    }, 1000);
}

//stop counter

function stopCountdown(){
    clearInterval(action);
}

//hide an element

function hide(Id){
    document.getElementById(Id).style.display = "none";
}

//show an element

function show(Id){
    document.getElementById(Id).style.display = "block";
}

//generate question and multiple answers

function generateQA(){
    var x = 1+ Math.round(5*Math.random());
    var y = 1+ Math.round(5*Math.random());
    correctAnswer = x+y;
    document.getElementById("question").innerHTML = x + "+" + y;
    var correctPosition = 1+ Math.round(3*Math.random());
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer; //fill one box with the correct answer

    //fill other boxes with wrong answers

    var answers = [correctAnswer];

    for(i=1; i<5; i++){
        if(i != correctPosition) {
            var wrongAnswer;
            do{
                wrongAnswer = (1+ Math.round(3*Math.random()))*(1+ Math.round(3*Math.random())); //a wrong answer
            }while(answers.indexOf(wrongAnswer)>-1)
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}



//Log Out Functionality For Dashboard




//logout a user
btnLogout.addEventListener('click', e =>{
  firebase.auth().signOut();
  location.href='file:///Users/blake/Projects/80KBV/parker-marie/astroMath/index.html';
});

var classId = '';
//add a realtime listenr
var queryy = firebase.database().ref("users/").orderByKey();
    queryy.once("value")
    .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
      var key = childSnapshot.key;
      // childData will be the actual contents of the
          if (firebaseUser.uid == key) {
            var childData = childSnapshot.val();
            classId = childData.classId;
            console.log(classId);
          }
        });


    var query = firebase.database().ref("students/"+classId+"/").orderByKey();
    query.once("value")
    .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
      var key = childSnapshot.key;
      // childData will be the actual contents of the
          console.log(classId);
          if (firebaseUser.uid == key) {
            var childData = childSnapshot.val();
            console.log(childData)
            document.getElementById("rangerName").innerHTML = childData.name;
            document.getElementById("highScore").innerHTML = "High Score: " + childData.asteroidHS;
          }
        });
    });

    });




    console.log();
  } else{
    // location.href='file:///Users/benwright/Documents/bootcampProjects/astroMath/index.html?';
    console.log('not logged in');
  }
});

}());
