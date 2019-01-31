import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import "./style.css";
import IssueContainer from '../../containers/Issue/Issue'

class Column extends PureComponent{
    renderIssueArray(){
      console.log('component', this.props.data);
        return this.props.data.map(data => (
            <IssueContainer
                key = { data.issue_id }
                issue_name = { data.name }
                reporter_id = { data.reporter_id }
                assignee_id = { data.assignee_id }
                priority_id = { data.priority_id }
                column_id = { data.column_id }
                description = { data.description }
                estimation = { data.estimation }
                issue_id = { data.issue_id }
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
