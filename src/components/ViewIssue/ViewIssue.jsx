import React, {PureComponent} from 'react';
import propTypes from 'prop-types';
import './style.css';

class EditIssue extends PureComponent {
    renderAssigneeList() {
        const assigneeList = this.props.assigneeList;
        const issueAssignee = this.props.issueAssignee;
        
        return (
            <select neme="issueGroup" id="issueGroup" disabled>
                {
                    assigneeList.map(assignee => (
                        <option selected={assignee === issueAssignee}>{assignee}</option>
                    ))
                }
            </select>
        )
    }

    renderPriorityList() {
        const priorityList = this.props.priorityList ;
        const issuePriority = this.props.issuePriority;

        return (
            <select neme="issuePriority" id="issuePriority" disabled>
            {
                priorityList.map(priority => (
                    <option selected={priority === issuePriority}>{priority}</option>
                ))
            }
        </select>
        ) 
    }

    renderBoardList() {
        const boardList = this.props.boardList;
        const issueBoard = this.props.issueBoard;

        return (
            <select neme="issueBoard" id="issueBoard" disabled>
            {
                boardList.map(board => (
                    <option selected={board === issueBoard}>{board}</option>
                ))
            }
        </select>
        ) 
    }

    render () {
        return ( 
            <div className="maincontaineredit">
                <div className="headedit">
                    <h1> Страница просмотра задачи </h1> 
                </div>
                <div className="mainelementsedit">
                    <div className="editgroup">
                        <label> Название задачи: </label>
                        <input type="text" name="name" defaultValue={this.props.issueName} disabled />
                    </div>

                    <div className="editgroup">                
                        <label> Описание: </label>
                        <textarea type="text" name="message"defaultValue={this.props.issueMessage} disabled/>
                    </div>

                    <div className="editgroup">
                        <label> Создатель задачи: </label>
                        <label> Admin </label>
                    </div> 

                    <div className="editgroup"> 
                        <label> Выберите исполнителя:</label>
                       {this.renderAssigneeList()}
                    </div>

                    <div className="editgroup">
                        <label> Выберите приоритет: </label>
                        {this.renderPriorityList()}
                        
                    </div>

                     <div className="editgroup">
                        <label> Выберите kanban доску: </label>
                        {this.renderBoardList()}
                        
                    </div>

                    <div className="editgroup">
                        <label> Дайте оценку задаче: </label>
                        <input type="text" name="name" defaultValue={this.props.issueText} disabled/>
                    </div>  
                </div>
                <div className="createclosedelete">
                    <p>
                        <input type="submit" value="Изменить задачу" />
                        <input type="submit" value="Закрыть" />
                    </p>
                </div>
            </div>
            )  
        }
   }

EditIssue.defaultProps = {
    issueName: 'Some name',
    issueMessage: 'Some message',
    issueText: 'Some text',
    issueAssignee: 'Group 4',
    assigneeList: ['Group 1', 'Group 2', 'Group 3', 'Group 4'],
    issuePriority: 'Normal',
    priorityList: ['Lowest', 'Low', 'Normal', 'Medium', 'High', 'Highest', 'Blocker'],
    issueBoard: 'Board3',
    boardList: ['Board1','Board2','Board3']
}

EditIssue.propTypes = {
    issueName: propTypes.string,
    issueMessage: propTypes.string,
    issueText: propTypes.string,
    issueGroup: propTypes.array,
    issuPriority: propTypes.array,
    issueBoard: propTypes.array,
}

export default EditIssue;