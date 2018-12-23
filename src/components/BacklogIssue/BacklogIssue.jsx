import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import './style.css';

class BacklogIssue extends PureComponent{
    render(){
        return(
            <button className = "backlog-issue">
                <span className="backlog-issue__content">{this.props.name}</span>
                <span className="backlog-issue__content">{this.props.priorityName}</span>
                <span className= "backlog-issue__content">{this.props.firstName} {this.props.lastName}</span>
            </button>
        )
    }
}

BacklogIssue.propTypes ={
    firstName: propTypes.string,
    lastName: propTypes.string,
    priorityName: propTypes.string,
    name: propTypes.string.isRequired,
};

export default BacklogIssue
