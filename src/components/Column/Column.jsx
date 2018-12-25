import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import "./style.css";
import Issue from '../../containers/Issue/Issue'

class Column extends PureComponent{
    renderIssueArray(){
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
            <div className="column">
                <div className="column-header">
                    {this.props.name}
                </div>
                <div className="column-issues">
                    {this.renderIssueArray()}
                </div>
            </div>
        )
    }
}

Column.propTypes = {
    data: propTypes.array,
    name: propTypes.string.isRequired
};

export default Column;
