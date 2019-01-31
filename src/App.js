import React, { Component } from 'react';
import propTypes from 'prop-types';
import Routes from './routes';
import './App.css';
import {Link} from 'react-router-dom';
import IssueViewWrapper from "./components/IssueViewWrapper";
import IssueViewCreateContainer from "./containers/IssueViewCreate/IssueViewCreate";

class App extends Component {
    constructor(props){
        super(props);
        this.state = { shouldRender: this.props.shouldRender };
    }
  render() {
    return (
      <div className="app">
        <div className="header">
          <Link className="header-button" to="/register">
            Registration
          </Link>
          <Link className="header-button" to="/boards">
            Boards
          </Link>
          <Link className="header-button" to="/backlog">
            Backlog
          </Link>
          <button className="header-button" onClick={(()=> this.setState({shouldRender:true}))}>
            Создать задачу
          </button>
          <IssueViewWrapper
              shouldRender={this.state.shouldRender}
              onClickOutside={() => {
                  this.setState({shouldRender: false});
              }}
          >
            <IssueViewCreateContainer/>
          </IssueViewWrapper>
        </div>
        <Routes/>
      </div>
    );
  }
}

App.propTypes = {
  children: propTypes.node,
    shouldRender: propTypes.boolean,
};

export default App;
