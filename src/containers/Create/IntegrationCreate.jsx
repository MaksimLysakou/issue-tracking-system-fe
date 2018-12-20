import React, { PureComponent } from 'react';
import axios from 'axios';
import CreateIssue from "../../components/CreateIssue";

class IntegrationCreate extends PureComponent{
    constructor(props){
        super(props);
        this.state = { 
            data: [],
            assigneeList: [],
            priorityList: [],
            boardList: []
            
        };
    }
    
    makeCreateRequest(formData){
        return axios.post(`http://localhost:3000/api/issues`, formData)
            .then((response) => {
                console.info(response)
            })
            .catch((error) => {
                console.error(error);
            })
    }

    render(){
        return(
            <CreateIssue 
                onIntegrationCreate={ ( formData ) => { this.makeCreateRequest(formData)}}
                assigneeList={this.state.assigneeList}
                priorityList={this.state.priorityList}
                boardList={this.state.boardList}
            />
        )
    }
}

export default IntegrationCreate;
