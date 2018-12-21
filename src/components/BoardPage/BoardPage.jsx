import React, {PureComponent} from 'react';
import propTypes from 'prop-types';
import './style.css';
import {Link} from 'react-router-dom';
const jwtDecode = require('jwt-decode');

class BoardPage extends PureComponent{
    onBoardCreate() {
        const boardToCreate = {
            board_name: this.boardName.value
        };
        this.props.onBoardRequest(boardToCreate);
    }

    renderBoardArray(){
        console.log(jwtDecode(localStorage.getItem("token")));
        return this.props.data.map(data => (
            <Link key = { data._id } className = "board-page__board" to = {`board/${data._id}`}>{data.board_name}</Link>
        ))
    }

    render(){
       return(
           <div className="board-page">
               <div className="board-page__createdBoards">
                   {this.renderBoardArray()}
               </div>
                   <span>Create board </span>
               <button className="board-page__createButton" onClick={this.onBoardCreate()}/>
                   <input className= "board-page__boardCreate-boardName" ref = { ref=> this.boardName = ref }/>

           </div>
       )
    }
}

BoardPage.propTypes = {
    data: propTypes.array.isRequired,
    createBoardRequest: propTypes.func.isRequired,
};

export default BoardPage;
