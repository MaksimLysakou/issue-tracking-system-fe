import React, { Component } from 'react';
import axios from 'axios';
import BoardPage from "../../components/BoardPage/index";
const jwtDecode = require('jwt-decode');

class Boards extends Component{
    constructor(props){
        super(props);
        this.state = { data: [] };
    }
    componentDidMount(){
        this.makeBoardsRequest()
        //

    }

    makeBoardsRequest() {
        // decode token
        // put userId into the data
        // send it with token
        return axios.get(`http://localhost:3000/api/boards/`,
            { headers: { token: localStorage.getItem('token') , userId: jwtDecode(localStorage.getItem(token))} })
            .then((response)=>{
                console.info(response)
            })
            .catch((error)=>{
                console.error(error);
            })
    }
    createBoardRequest() {
        return axios.post(`http://localhost:3000/api/boards`, { token: localStorage.getItem('token') })
            .then((response)=>{
                console.info(response)
            })
            .catch((error)=>{
                console.error(error);
            })
    }

    render(){
        return(
            <BoardPage data={this.state.data} createBoardRequest={this.createBoardRequest} />
        )
    }

}

export default Boards;
