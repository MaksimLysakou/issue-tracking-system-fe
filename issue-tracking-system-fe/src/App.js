import React, { Component } from 'react';
import propTypes from 'prop-types';
import Routes from './routes';
import './App.css';
import {Link} from 'react-router-dom';
import IssueViewWrapper from "./components/IssueViewWrapper";
import IssueViewContainer from "./containers/IssueView/IssueView";

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
          <button className="header-button" onClick={(()=> this.setState({shouldRender:true}))}>
            Создать задачу
          </button>
          <IssueViewWrapper
              shouldRender={this.state.shouldRender}
              onClickOutside={() => {
                  this.setState({shouldRender: false});
              }}
          >
            <IssueViewContainer
                  reporter_id={this.props.reporter_id}
                  issue_id={this.props.issue_id}
                  current_assignee_id={this.props.current_assignee_id}
                  current_column_id={this.props.current_column_id}
                  current_priority_id={this.props.current_priority_id}
                  description={this.props.description}
                  issue_name={this.props.issue_name}
                  estimation={this.props.estimation}
              />
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
