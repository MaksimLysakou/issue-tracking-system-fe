import React, { PureComponent } from 'react';
import axios from 'axios';
import BoardsPage from "../../components/BoardPage/index";
const jwtDecode = require('jwt-decode');

class Boards extends PureComponent{
    constructor(props){
        super(props);
        this.state = { data: [
                {
                    _id : "5c2e30e4fe742a43f0e08eb6",
                    board_name : "testBoard",
                    __v : 0
                }
            ] };
    }
    componentDidMount(){
        this.makeBoardsRequest()
    }

    makeBoardsRequest() {
        return axios.get(`http://localhost:3000/api/boards/`,
            { headers: { token: localStorage.getItem('token') , userId: jwtDecode(localStorage.getItem('token'))} })
            .then((response)=>{
                this.setState({ data: response.data.foundBoards })
            })
            .catch((error)=>{
                console.error(error);
            })
    }

    createBoardsRequest(boardName) {
        return axios.post(`http://localhost:3000/api/boards`, { boardName: boardName.board_name, token: localStorage.getItem('token') })
            .then(()=>{
                this.makeBoardsRequest();
            })
            .catch((error)=>{
                console.error(error);
            })
    }

    render(){
        return(
            <BoardsPage data={this.state.data} createBoardsRequest={(boardName) => this.createBoardsRequest(boardName)} />
        )
    }
}

export default Boards;
