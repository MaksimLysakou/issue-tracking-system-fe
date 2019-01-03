import React, {PureComponent} from 'react';
import propTypes from 'prop-types';
import './style.css';

class IssueView extends PureComponent {
    onUpdate() {
        const formData = {
            assignee_id: this.state.assignee_id,
            priority_id: this.state.priority_id,
            issueName: this.issueName.value,
            description: this.description.value,
            estimation: this.estimation.value,
            board_id: this.state.board_id,
        };
        this.props.makeUpdateRequest(formData);
    }

    onColumnsListUpdate() {
        const formData = {
            board_id: this.state.board_id
        };
        this.props.makeBoardColumnsRequest(formData);
    }

    renderAssigneeList() {
        const assigneeList = this.props.assignees;
        const current_assignee_id = this.props.current_assignee_id;

        return (
            <select
                ref={(ref) => {this.assignee_id = ref;}}
                onChange={(event) => {
                    const selectedIndex = event.target.options.selectedIndex;
                    this.setState({ assignee_id:event.target.options[selectedIndex].getAttribute('_id') })
                }}
            >
                {
                    assigneeList.map(assignee => (
                        <option key = { assignee.user_id }
                                asignee_id = { assignee.user_id }
                                selected = { assignee.user_id === current_assignee_id }
                        >
                            { assignee.first_name } { assignee.last_name }
                            </option>
                    ))
                }
            </select>
        )
    }

    renderBoardList() {
        const board_array = this.props.board_array;
        const board_name = this.props.board_name;
        return (
            <select
                onChange={(event) => {
                    const selectedIndex = event.target.options.selectedIndex;
                    this.setState({ board_id:event.target.options[selectedIndex].getAttribute('board_id') },
                    this.onColumnsListUpdate()
                    )
                }}
            >
                {
                    board_array.map(board => (
                        <option
                            key={board.board_id}
                            board_id = { board.board_id }
                            selected = { board.board_id === board_name }
                        >
                            { board.board_name }
                            </option>
                    ))
                }
            </select>
        )
    }

    renderColumnList() {
        const columnList = this.props.columns;
        const current_column_id = this.props.current_column_id;

        return (
            <select
                ref={(ref) => {this.board_id = ref;}}
                onChange={(event) => {
                    const selectedIndex = event.target.options.selectedIndex;
                    this.setState({ board_id:event.target.options[selectedIndex].getAttribute('column_id') }
                    )
                }}
            >
                {
                    columnList.map(column => (
                        <option
                            key={column.column_id}
                            column_id={column.column_id}
                            selected={column.column_id === current_column_id}
                        >
                            {column.column_name}
                            </option>
                    ))
                }
            </select>
        )
    }

    renderPriorityList() {
        const priority_array = this.props.priority_array ;
        const current_priority_id = this.props.current_priority_id;

        return (
            <select onChange={(event) => {
                const selectedIndex = event.target.options.selectedIndex;
                this.setState(event.target.options[selectedIndex].getAttribute('priority_id'));
            }}>
                {
                    priority_array.map(priority => (
                        <option key={priority.priority_id}
                                priority_id={priority.priority_id}
                                selected={priority.priority_id === current_priority_id}
                        >
                            {priority.priority_name}
                            </option>
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
                        <input defaultValue={this.props.issueName} ref={(ref) => {this.issueName = ref;}}/>
                    </div>
                    <div className="issue-view__body-issue">
                        <span> Описание: </span>
                        <textarea defaultValue={this.props.description} ref={(ref) => {this.description = ref;}}/>
                    </div>
                    <div className="issue-view__body-issue">
                        <span> Создатель задачи: </span>
                        <span> {this.props.reporter_email} </span>
                    </div>
                    <div className="issue-view__body-issue">
                        {this.renderBoardList()}
                    </div>
                    <div className="issue-view__body-issue">
                        {this.renderColumnList}
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
                        <input defaultValue={this.props.estimation} ref={(ref) => {this.estimation = ref;}}/>
                    </div>
                    <div className="issue-view__buttons">
                        <button className="issue-view__buttons-edit" onClick={()=> this.onUpdate()}/>
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
    assignees: [],
    column_names: [],
    assignee_emails: [],
    reporter_email: '',
    current_assignee_id: '',
    current_column_id: '',
    current_priority_id: '',
};

IssueView.propTypes = {
    current_assignee_id: propTypes.string,
    current_column_id: propTypes.string,
    current_priority_id: propTypes.string,
    reporter_email: propTypes.string.isRequired,
    description: propTypes.string,
    issue_name: propTypes.string.isRequired,
    estimation: propTypes.string,
    assignee_array: propTypes.array.isRequired,
    priority_array: propTypes.array.isRequired,
    column_array: propTypes.array.isRequired,
    board_array: propTypes.array.isRequired,
    makeUpdateRequest: propTypes.func,
};

export default IssueView;
