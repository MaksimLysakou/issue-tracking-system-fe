import React, {PureComponent} from 'react';
import propTypes from 'prop-types';
import './style.css';

class IssueViewCreate extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      issue_name:'',
      description:'',
      assignee_id:'',
      priority_id:'',
      board_id:'',
    }
  };
  onCreate() {
    const formData = {
      issue_name: this.issue_name.value,
      description: this.description.value,
      assignee_id: this.state.assignee_id,
      priority_id: this.state.priority_id,
      estimation: this.estimation.value,
      column_id: this.state.column_id,
    };
    console.log("state: ", this.state)
    console.log('formData в onCreate', formData);
    this.props.makeCreateIssueRequest(formData);
  }

  onColumnsListUpdate() {
    const formData = {
      board_id: this.state.board_id
    };
    this.props.makeBoardColumnsRequest(formData);
  }

  renderAssigneeList() {
    const assigneeList = this.props.assignee_array;

    return (
      <select
        onChange={(event) => {
          console.log('onChange')
          const selectedIndex = event.target.options.selectedIndex;
          console.log(selectedIndex);
          this.setState({ assignee_id:event.target.options[selectedIndex].getAttribute('_id') })
          console.log("state", this.state)
        }}
      >
        {
          assigneeList.map(assignee => (
            <option key = { assignee._id }
                    asignee_id = { assignee._id }
            >
              { assignee.email }
            </option>
          ))
        }
      </select>
    )
  }

  renderBoardList() {
    const board_array = this.props.board_array;
    return (
      <select
        onChange={(event) => {
          const selectedIndex = event.target.options.selectedIndex;
          this.setState({ board_id:event.target.options[selectedIndex].getAttribute('board_id') })
          console.log(event.target.options[selectedIndex]);
          this.onColumnsListUpdate();
          console.log("state", this.state)
        }}
      >
        {
          board_array.map(board => (
            <option
              key={board.board_id}
              board_id = { board._id }
            >
              { board.board_name }
            </option>
          ))
        }
      </select>
    )
  }

  renderColumnList() {
    const columnList = this.props.column_array;
    return (
      <select
        ref={(ref) => {this.column_id = ref;}}
        onChange={(event) => {
          const selectedIndex = event.target.options.selectedIndex;
          this.setState({ column_id :event.target.options[selectedIndex].getAttribute('column_id') })
          console.log('state', this.state);
        }}
      >
        {
          columnList.map(column => (
            <option
              key={column.column_id}
              column_id={column.column_id}
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
    return (
      <select
        onChange={(event) => {
          const selectedIndex = event.target.options.selectedIndex;
          this.setState(event.target.options[selectedIndex].getAttribute('priority_id'));
        }}>
        {
          priority_array.map(priority => (
            <option key={priority._id}
                    priority_id={priority._id}
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
      <div className="issue-view-create">
        <div className="issue-view-create__body">
          <div className="issue-view-create__body-issue">
            <span> Название задачи: </span>
            <input ref={(ref) => {this.issue_name = ref;}}/>
          </div>
          <div className="issue-view-create__body-issue">
            <span> Описание: </span>
            <textarea ref={(ref)=> {this.description=ref;}}/>
          </div>
          <div className="issue-view-create__body-issue">
            <span> Доска: </span>
            {this.renderBoardList()}
          </div>
          <div className="issue-view-create__body-issue">
            <span> Колонка: </span>
            {this.renderColumnList()}
          </div>
          <div className="issue-view-create__body-issue">
            <span> Исполнитель:</span>
            {this.renderAssigneeList()}
          </div>
          <div className="issue-view-create__body-issue">
            <span> Приоритет: </span>
            {this.renderPriorityList()}
          </div>
          <div className="issue-view-create__body-issue">
            <span> Estimation: </span>
            <input ref={(ref) => {this.estimation = ref;}}/>
          </div>
          <div className="issue-view-create__buttons">
            <button className="issue-view-create__buttons-create" onClick={()=> this.onCreate()}> Создать задачу </button>
          </div>
        </div>
      </div>
    )
  }
}

IssueViewCreate.defaultProps = {
  assignee_array: [],
  column_array: [],
  board_array: [],
  priority_array: [],
};

IssueViewCreate.propTypes = {
  assignee_array: propTypes.array.isRequired,
  priority_array: propTypes.array.isRequired,
  column_array: propTypes.array.isRequired,
  board_array: propTypes.array.isRequired,
  makeCreateIssueRequest: propTypes.func,
  makeBoardColumnsRequest: propTypes.func,
};

export default IssueViewCreate;
