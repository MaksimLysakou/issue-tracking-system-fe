import React, { Component } from 'react';
import propTypes from 'prop-types';
import Routes from './routes';

class App extends Component {
  render() {
    console.log(this.props.children)
    return (
      <div>
        <Routes/>
          {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: propTypes.node,
};

export default App;
