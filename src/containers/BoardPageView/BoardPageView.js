import React, { PureComponent } from 'react';
import axios from 'axios';
import BoardPageView from '../../components/BoardPageView'

class BoardPageViewContainer extends PureComponent{
    constructor(props){
        super(props);
        this.state = { data: [] };
    }

    componentDidMount(){
        this.makeColumnRequest()
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
