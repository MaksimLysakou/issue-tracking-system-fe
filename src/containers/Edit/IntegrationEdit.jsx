import React, { PureComponent } from 'react';
import axios from 'axios';
import EditIssue from '../../components/EditIssue';

class integrationEdit extends PureComponent{
    constructor(props){
        super(props);
        this.state = { 
            data: [],
            issueName: '',
            issueMessage: '',
            issueText: '',
            issueAssignee: '',
            assigneeList: [],
            issuePriority: '',
            priorityList: [],
            issueBoard: '',
            boardList: []
            // ...
         };
    }

    componentDidMount() {
        const issueId = window.location.href.slice(window.location.href.lastIndexOf('/') + 1);
        axios.get(`http://localhost:3000/api/issues/${issueId}`)
            .then((response)=>{
                this.setState({ issueName: response.data.name });
                this.setState({ issueMessage: response.data.message });
                this.setState({ issueText: response.data.text });
                this.setState({ issueAssignee: response.data.assignee });
                this.setState({ issuePriority: response.data.priority });
                this.setState({ issueBoard: response.data.board });
            })
        axios.get(`http://localhost:3000/api/issues/ `)
            .then((response)=>{
                this.setState({ assigneeList: response.data.assignee });

        })

        axios.get(`http://localhost:3000/api/issues/`)
            .then((response)=>{
                this.setState({ priorityList: response.data.priority });
        })

        axios.get(`http://localhost:3000/api/issues/`)
            .then((response)=>{
                this.setState({ boardList: response.data.board });
        })
        

    }

    makeEditRequest(formData) {
        const issueId = window.location.href.slice(window.location.href.lastIndexOf('/') + 1);
        return axios.put(`http://localhost:3000/api/issues/${this.state.id} `, formData)
            .then((response)=>{
                console.info(response);
            })
            .catch((error)=>{
                console.error(error);
            })

    }
    render(){
        return(
            <EditIssue 
                onintegrationEdit = { ( formData ) => {this.makeEditRequest(formData) } }
                issueName={this.state.issueName}
                issueMessage={this.state.issueMessage}
                issueText={this.state.issueText}
                issueAssignee={this.state.issueAssignee}
                assigneeList={this.state.assigneeList}
                issuePriority={this.state.issuePriority}
                priorityList={this.state.priorityList}
                issueBoard={this.state.issueBoard}
                boardList={this.state.boardList}
            />
        )
    }

}

export default integrationEdit;