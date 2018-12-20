import React, {PureComponent} from 'react';
import './style.css';

class CreateIssue extends PureComponent{

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
            <div className="maincontainer">
                <div className="head">
                    <h1> Страница создания задачи </h1> 
                </div>
                <div className="mainelements">
                    <div className="inputgroup">
                        <span> Название задачи: </span>
                        <input type="text" name="name" />
                    </div>

                    <div className="inputgroup">                
                        <span> Описание: </span>
                        <textarea type="text" name="message"/>
                    </div>

                    <div className="inputgroup">
                        <span> Создатель задачи: </span>
                        <span> Admin </span>
                    </div> 

                    <div className="inputgroup"> 
                        <span> Выберите исполнителя:</span>
                        {this.renderAssigneeList()}
                    </div>

                    <div className="inputgroup">
                        <span> Выберите приоритет: </span>                       
                        {this.renderPriorityList()}
                    </div>
                    <div className="inputgroup">
                        <span> Выберите kanban доску: </span>
                        {this.renderBoardList()}
                     </div>

                    <div className="inputgroup">
                        <span> Дайте оценку задаче: </span>
                        <input type="text" name="name" />
                    </div>  
                </div>
                <div className="createclose">
                    <p>
                    <input type="submit" value="Добавить задачу" />
                        <input type="submit" value="Закрыть" />
                    </p>
                </div>
            </div>
            )  
        }
   }

   

export default CreateIssue;
