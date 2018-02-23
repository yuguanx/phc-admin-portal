import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Routes from "./Routes";
import Login from "./containers/Login";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Project Homeless Connect Admin Platform</h1>
        </header>
        <Login />
      </div>
    );
  }
}

export default App;
