import React, { PureComponent } from 'react';
import axios from 'axios';
import BoardsPage from "../../components/BoardPage/index";
const jwtDecode = require('jwt-decode');

class Boards extends PureComponent{
    constructor(props){
        super(props);
        this.state = { data: [] };
    }
    componentDidMount(){
        this.makeBoardsRequest()
    }

    makeBoardsRequest() {
        const user_id = jwtDecode(localStorage.getItem('token'));
        return axios.get(`http://localhost:3000/api/boards/${user_id}`,
            { headers: { token: localStorage.getItem('token') } })
            .then((response)=>{
                console.log(response.data.board_array)
                this.setState({ data: response.data.board_array })
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
