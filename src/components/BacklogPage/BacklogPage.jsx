import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import './style.css';
import BacklogIssue from '../../containers/BacklogIssue/BacklogIssue'

class BacklogPage extends PureComponent {
    renderBacklogArray(){
        return this.props.data.map(data => (
            <BacklogIssue
                key={data._id}
                name={data.name}
                assigneeId={data.assignee_id}
                priorityId={data.priority_id}
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
