import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import './style.css';
import Issue from '../../containers/Issue/Issue'

class BacklogPage extends PureComponent {
    renderBacklogArray(){

        return this.props.data.map(data => (
            <Issue
                key={data._id}
                issue_name={data.name}
                assignee_id={data.assignee_id}
                priority_id={data.priority_id}
                issue_id={data.issue_id}
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
