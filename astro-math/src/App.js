import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import amlogo from './img/amlogo.svg';
import Login from './components/login';
import Game from './components/Game';


class App extends Component {
  render() {
    return (
      <div className="App">

        <Game />

      </div>
    );
  }
}

export default App;


// <img className="App-logo" src={amlogo} alt="logo" />
