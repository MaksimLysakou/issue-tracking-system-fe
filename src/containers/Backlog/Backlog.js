import React, { PureComponent } from 'react';
import axios from 'axios';
import BacklogPage from "../../components/BacklogPage";

class Backlog extends PureComponent{
    constructor(props){
        super(props);
        this.state = { data: [] };
    }

    componentDidMount(){
        this.makeIssuesRequest()
    }

    makeIssuesRequest(){
        return axios.get(`http://localhost:3000/api/issues`,
            { headers: { token: localStorage.getItem('token') } })
            .then((response)=>{
                this.setState({ data: response.data.result })
            })
            .catch((error)=>{
                console.error(error);
            })
    }

    render(){
        return(
            <BacklogPage data={this.state.data} />
        )
    }
}

export default Backlog
