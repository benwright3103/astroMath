import React, {Component} from 'react';


class Game extends Component {






  render(){
    return(
      <div id="container">
           <div id="score">
               Score: <span id="scorevalue">0</span>
           </div>
           <div id="correct">
               Correct
           </div>
           <div id="wrong">
               Try again
           </div>
           <div id="question">

           </div>
           <div id="instruction">
               Click on the correct answer
           </div>
           <div id="choices">
               <div id="box1" className="box"></div>
               <div id="box2" className="box"></div>
               <div id="box3" className="box"></div>
               <div id="box4" className="box"></div>
           </div>
           <div id="startreset">
               Start Game
           </div>
           <div id="timeremaining">
               Time remaining: <span id="timeremainingvalue">60</span> sec
           </div>
           <div id="gameOver">

           </div>
       </div>
    );
  }
}

export default Game;
