import React, {PureComponent} from 'react';
import './style.css';

class CreateIssue extends PureComponent{
    
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
                        <select >
                            <option value="Команда 1">Команда 1</option>
                            <option value="Команда 2">Команда 2</option>
                            <option value="Команда 3">Команда 3</option>
                            <option value="Команда 4">Команда 4</option>
                        </select>
                    </div>

                    <div className="inputgroup">
                        <span> Выберите приоритет: </span>
                        <select >
                            <option value="Lowest">Lowest</option>
                            <option value="Low">Low</option>
                            <option value="Normal">Normal</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                            <option value="Highest">Highest</option>
                            <option value="Blocker">Blocker</option>
                        </select>
                    </div>

                    <div className="inputgroup">
                        <span> Выберите kanban доску: </span>
                        <select >
                            <option value="Board1">Board1</option>
                            <option value="Board2">Board2</option>
                            <option value="Board3">Board3</option>

                        </select>
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
