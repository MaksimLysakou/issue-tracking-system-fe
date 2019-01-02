import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import './style.css';
import Issue from '../../containers/Issue/Issue'

class BacklogPage extends PureComponent {
    renderBacklogArray(){

        return this.props.data.map(data => (
            <Issue
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
                <button className = "backlog-issue_open-creating-form">
                    Создать задачу
                </button>
            </div>
        )
    }
}

BacklogPage.propTypes = {
    data: propTypes.array.isRequired,
};

export default BacklogPage
