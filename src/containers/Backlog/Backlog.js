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
        return axios.get(`http://localhost:3000/api/issues/`,
            { headers: { token: localStorage.getItem('token') } })
            .then((response)=>{
                this.setState({ data: response.data.foundIssues })
            })
            .catch((error)=>{
                console.error(error);
            })
    }

    render(){
        return(
            <BacklogPage data={[{name:"testIssue"}, {name:"testIssue2"}, {name:"testIssue3"}, {name:"testIssue4"},
                {name:"testIssue5"}, {name:"testIssue6"},{name:"testIssue7"}, {name:"testIssue8"}]} />
        )
    }
}

export default Backlog
