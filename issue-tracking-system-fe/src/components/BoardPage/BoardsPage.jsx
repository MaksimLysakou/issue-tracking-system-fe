import React, {PureComponent} from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './style.css';

class BoardsPage extends PureComponent{
    onBoardCreate() {
        const boardToCreate = {
            board_name: this.boardName.value
        };
        this.props.createBoardsRequest(boardToCreate);
    }

    renderBoardArray(){
        return this.props.data.map(data => (
            <Link key = { data._id } className = "board-page__board" to = {`board/${data._id}`}>{data.board_name}</Link>
        ))
    }

    render(){
       return(
           <div className="board-page">
               <div className="board-page__createdBoards">
                   {this.renderBoardArray()}
                   <div className="board-page__board">
                       <span> Название доски </span>
                       <input className="board-page__boardCreate-boardName" ref={ref => this.boardName = ref}/>
                       <button className="board-page__createButton" onClick={() => this.onBoardCreate()}> Create board </button>
                    </div>
               </div>
           </div>
       )
    }
}

BoardsPage.propTypes = {
    data: propTypes.array.isRequired,
    createBoardsRequest: propTypes.func.isRequired,
};

export default BoardsPage;
