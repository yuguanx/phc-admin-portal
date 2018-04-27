import React, { Component } from 'react';
import Login from "./containers/Login";
import { Switch, Route } from 'react-router-dom';
import AdminPlatform from './containers/AdminPlatform';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Project Homeless Connect Admin Platform</h1>
        </header>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/portal' component={AdminPlatform} />
        </Switch>
      </div>
    );
  }
}

export default App;
