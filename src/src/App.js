import React, { Component } from 'react';
import propTypes from 'prop-types';
import Routes from './routes';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className = "header">
        </div>
        <Routes/>
      </div>
    );
  }
}

App.propTypes = {
  children: propTypes.node,
};

export default App;
