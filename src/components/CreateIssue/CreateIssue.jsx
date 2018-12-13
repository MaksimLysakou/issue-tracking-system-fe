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
                        <label> Название задачи: </label>
                        <input type="text" name="name" />
                    </div>

                    <div className="inputgroup">                
                        <label> Описание: </label>
                        <textarea type="text" name="message"/>
                    </div>

                    <div className="inputgroup">
                        <label> Создатель задачи: </label>
                        <label> Admin </label>
                    </div> 

                    <div className="inputgroup"> 
                        <label> Выберите исполнителя:</label>
                        <select >
                            <option value="Команда 1">Команда 1</option>
                            <option value="Команда 2">Команда 2</option>
                            <option value="Команда 3">Команда 3</option>
                            <option value="Команда 4">Команда 4</option>
                        </select>
                    </div>

                    <div className="inputgroup">
                        <label> Выберите приоритет: </label>
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
                        <label> Выберите kanban доску: </label>
                        <select >
                            <option value="Board1">Board1</option>
                            <option value="Board2">Board2</option>
                            <option value="Board3">Board3</option>

                        </select>
                    </div>

                    <div className="inputgroup">
                        <label> Дайте оценку задаче: </label>
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
