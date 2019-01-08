import React, { PureComponent } from 'react';
import axios from 'axios';
import BoardPageView from '../../components/BoardPageView'

class BoardPageViewContainer extends PureComponent{
    constructor(props){
        super(props);
        this.state = { data: [
                {_id: "5c2e30e4fe742a43f0e08eb8",column_name: "TODO", board_id: "5c2e30e4fe742a43f0e08eb6"},
                {_id: "5c2e30e4fe742a43f0e08eb9",column_name: "In progress",board_id:"5c2e30e4fe742a43f0e08eb6"},
                {_id: "5c2e30e4fe742a43f0e08eba",column_name: "Code review",board_id:"5c2e30e4fe742a43f0e08eb6"},
                {_id: "5c2e30e4fe742a43f0e08ebb",column_name: "Done",board_id:"5c2e30e4fe742a43f0e08eb6"}] };
    }

    componentDidMount(){
        /*this.makeColumnRequest()*/
    }

    makeColumnRequest(){
        const boardId = window.location.href.slice(window.location.href.lastIndexOf('/') + 1);
        return axios.get(`http://localhost:3000/api/columns/${boardId}`,
            { headers: { token: localStorage.getItem('token') } })
            .then((response)=>{
                this.setState({ data: response.data.gotColumns })
            })
            .catch((error)=>{
                console.error(error);
            })
    }

    render(){
        return(
            <BoardPageView data={this.state.data} />
        )
    }
}

export default BoardPageViewContainer
