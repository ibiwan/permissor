import React from 'react';
import Router from '../components/router/index'
import logo from '../../assets/logo.svg';
import './App.css';
import Playground from '../components/playground';

function App() {
  return (
    <div    className = "App">
    <header className = "App-header">
    <img    src       = {logo} className = "App-logo" alt = "logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload...
        </p>
        <a
          className = "App-link"
          href      = "https://reactjs.org"
          target    = "_blank"
          rel       = "noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Playground></Playground>
      <Router></Router>
    </div>
  );
}

export default App;
