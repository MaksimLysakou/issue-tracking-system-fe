import React, {PureComponent} from 'react';
import propTypes from 'prop-types';
import './style.css';

class IssueView extends PureComponent {
    renderAssigneeList() {
        const assigneeList = this.props.assignee_emails;
        const issueAssignee = this.props.assignee_email;

        return (
            <select>
                {
                    assigneeList.map(assignee => (
                        <option key={assignee} selected={assignee === issueAssignee}>{assignee}</option>
                    ))
                }
            </select>
        )
    }

    renderPriorityList() {
        const priorityList = this.props.priority_names ;
        const issuePriority = this.props.priority_name;

        return (
            <select>
                {
                    priorityList.map(priority => (
                        <option key={priority} selected={priority === issuePriority}>{priority}</option>
                    ))
                }
            </select>
        )
    }

    render () {
        return (
            <div className="issue-view">
                <div className="issue-view__body">
                    <div className="issue-view__body-issue">
                        <span> Название задачи: </span>
                        <input defaultValue={this.props.issueName} />
                    </div>
                    <div className="issue-view__body-issue">
                        <span> Описание: </span>
                        <textarea defaultValue={this.props.description}/>
                    </div>
                    <div className="issue-view__body-issue">
                        <span> Создатель задачи: </span>
                        <span> Admin </span>
                    </div>

                    <div className="issue-view__body-issue">
                        <span> Исполнитель:</span>
                        {this.renderAssigneeList()}
                    </div>

                    <div className="issue-view__body-issue">
                        <span> Приоритет: </span>
                        {this.renderPriorityList()}
                    </div>
                    <div className="issue-view__body-issue">
                        <span> Estimation: </span>
                        <input defaultValue={this.props.issueText}/>
                    </div>
                    <div className="issue-view__buttons">
                        {this.props.controls}
                    </div>
                </div>
            </div>
        )
    }
}

IssueView.defaultProps = {
    description: '',
    assignee_email: '',
    priority_name: 'None',
    estimation: '',
    column_name:'',
};

IssueView.propTypes = {
    reporter_email: propTypes.string.isRequired,
    assignee_emails: propTypes.array.isRequired,
    assignee_email: propTypes.string,
    description: propTypes.string,
    name: propTypes.string.isRequired,
    estimation: propTypes.string,
    column_names: propTypes.array.isRequired,
    column_name: propTypes.string,
    priority_names: propTypes.array.isRequired,
    priority_name: propTypes.string,
    controls: propTypes.node,
};

export default IssueView;
