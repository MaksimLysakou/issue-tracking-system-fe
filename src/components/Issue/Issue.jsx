import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import './style.css';

class Issue extends PureComponent{
    render(){
        return(
            <button className = "issue">
                <span className="issue__content">{this.props.name}</span>
                <span className="issue__content">{this.props.priorityName}</span>
                <span className= "issue__content">{this.props.firstName} {this.props.lastName}</span>
            </button>
        )
    }
}

Issue.propTypes ={
    firstName: propTypes.string,
    lastName: propTypes.string,
    priorityName: propTypes.string,
    name: propTypes.string.isRequired,
};

export default Issue
