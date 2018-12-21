import React, {PureComponent} from 'react';
import propTypes from 'prop-types';
import './style.css';
import {Link} from 'react-router-dom';
const jwtDecode = require('jwt-decode');

class BoardPage extends PureComponent{
    renderBoardArray(){
        console.log(jwtDecode(localStorage.getItem("token")));
        return this.props.data.map(data => (
            <Link key = { data._id } className = "board-page__board" to = {`board/${data._id}`}>Got boards</Link>
        ))
    }

    render(){
       return(
           <div className="board-page">
               <div className="board-page__createdBoards">
                   {this.renderBoardArray()}
               </div>
               <Link className = "board-page__boardCreate" to = {'boards'} onClick={() => this.props.createBoardRequest()} >
                   <span>Create board </span>
                   <input className= "board-page__boardCreate-boardName"/>
               </Link>
           </div>
       )
    }
}

BoardPage.propTypes = {
    data: propTypes.array.isRequired,
    createBoardRequest: propTypes.func.isRequired,
};

export default BoardPage;
