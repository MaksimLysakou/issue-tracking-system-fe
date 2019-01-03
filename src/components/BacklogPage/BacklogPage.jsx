import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import './style.css';
import IssueContainer from '../../containers/Issue/Issue'

class BacklogPage extends PureComponent {
    renderBacklogArray(){
        return this.props.data.map(issue => (
            <IssueContainer
                key={issue._id}
                assignee_email = { issue.assignee_email }
                issue_name = { issue.name }
                reporter_id = { this.props.reporter_id }
                issue_id = { this.props._id }
                current_assignee_id = { this.props.assignee_id }
                current_column_id = { this.props.column_id }
                current_priority_id = { this.props.priority_id }
                description = { this.props.description }
                estimation = { this.props.estimation }
            />
        ))
    }
    render(){
        return(
            <div className="backlog">
                {this.renderBacklogArray()}
            </div>
        )
    }
}

BacklogPage.propTypes = {
    data: propTypes.array.isRequired,
};

export default BacklogPage
