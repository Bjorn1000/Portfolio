import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import InteractiveApps from './components/InteractiveApps/InteractiveApps'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Express Starter</h1>
        </header>
        <Home />
        <InteractiveApps/>
      </div>
    );
  }
}

export default App;
