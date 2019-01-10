import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import './style.css';
import IssueViewWrapper from "../IssueViewWrapper";
import IssueViewContainer from "../../containers/IssueView/IssueView";

class Issue extends PureComponent{
    constructor(props){
        super(props);
        this.state = { shouldRender: this.props.shouldRender };
    }
    render(){
        return(
            <div className="issue_wrapper">
                <button className = "issue" onClick={()=> this.setState({shouldRender:true})}>
                    <span className="issue__content">{this.props.issue_name}</span>
                    <span className="issue__content">{this.props.priority_name}</span>
                    <span className= "issue__content">{this.props.assignee_email}</span>
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
        )
    }
}

Issue.defaultProps = {
    shouldRender:false,
};

Issue.propTypes ={
    assignee_email: propTypes.string,
    issue_name: propTypes.string.isRequired,
    priority_name: propTypes.string,
    reporter_id: propTypes.string.isRequired,
    issue_id: propTypes.string.isRequired,
    current_assignee_id: propTypes.string,
    current_column_id: propTypes.string,
    current_priority_id: propTypes.string,
    description: propTypes.string,
    estimation: propTypes.string,
    shouldRender: propTypes.boolean,
};

export default Issue
