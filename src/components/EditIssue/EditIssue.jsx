import React, {PureComponent} from 'react';
import propTypes from 'prop-types';
import './style.css';

class EditIssue extends PureComponent {
    renderAssigneeList() {
        const assigneeList = this.props.assigneeList;
        const issueAssignee = this.props.issueAssignee;
        
        return (
            <select neme="issueGroup" id="issueGroup">
                {
                    assigneeList.map(assignee => (
                        <option selected={assignee === issueAssignee}>{assignee}</option>
                    ))
                }
            </select>
        )
    }

    renderPriorityList() {
        const priorityList = this.props.priorityList;
        const issuePriority = this.props.issuePriority;

        return (
            <select neme="issuePriority" id="issuePriority">
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
            <select neme="issueBoard" id="issueBoard">
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
                    <h1> Страница изменения задачи </h1> 
                </div>
                <div className="mainelementsedit">
                    <div className="editgroup">
                        <span> Название задачи: </span>
                        <input type="text" name="name" defaultValue={this.props.issueName} />
                    </div>

                    <div className="editgroup">                
                        <span> Описание: </span>
                        <textarea type="text" name="message"defaultValue={this.props.issueMessage}/>
                    </div>

                    <div className="editgroup">
                        <span> Создатель задачи: </span>
                        <span> Admin </span>
                    </div> 

                    <div className="editgroup"> 
                        <span> Выберите исполнителя:</span>
                       {this.renderAssigneeList()}
                    </div>

                    <div className="editgroup">
                        <span> Выберите приоритет: </span>
                        {this.renderPriorityList()}
                        
                    </div>

                     <div className="editgroup">
                        <span> Выберите kanban доску: </span>
                        {this.renderBoardList()}
                        
                    </div>

                    <div className="editgroup">
                        <span> Дайте оценку задаче: </span>
                        <input type="text" name="name" defaultValue={this.props.issueText}/>
                    </div>  
                </div>
                <div className="createclosedelete">
                    <p>
                        <input type="submit" value="Изменить задачу" />
                        <input type="submit" value="Удалить задачу" />
                        <input type="submit" value="Закрыть" />
                    </p>
                </div>
            </div>
            )  
        }
   }

EditIssue.defaultProps = {
    issueName: '',
    issueMessage: '',
    issueText: '',
    issueAssignee: '',
    assigneeList: [],
    issuePriority: '',
    boardList: [],
    issueBoard: ''
}

EditIssue.propTypes = {
    issueName: propTypes.string,
    issueMessage: propTypes.string,
    issueText: propTypes.string,
    issueGroup: propTypes.array,
    issuePriority: propTypes.array,
    issueBoard: propTypes.array,
}

export default EditIssue;