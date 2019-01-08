import React, { PureComponent } from 'react';
import axios from 'axios';
import propTypes from 'prop-types'
import IssueView from "../../components/IssueView/IssueView";

class IssueViewContainer extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            reporter_email: "reporter@gmail.com",
            assignee_emails: ["assignee1@gmail.com", "assignee2@gmail.com"],
            name: "testIssue",
            assignee_array:[
                {
                    _id:"asdasdadasdsfsdgsd", email:"assignee1@gmail.com"
                },
                {
                    _id:"asdasfsdgsdgdfgdffd", email:"assignee2@gmail.com"
                },
                {
                    _id:"asdslkfjesijvmdkjng", email:"assignee3@gmail.com"
                }
            ],
            priority_array:[
                {_id:"131221adwsfweqewq1", priority_name:"None"},
                {_id:"131221adwsfweqewq2", priority_name:"Lowest"},
                {_id:"131221adwsfweqewq3", priority_name:"Low"},
                {_id:"131221adwsfweqewq4", priority_name:"Normal"},
                {_id:"131221adwsfweqewq5", priority_name:"Medium"},
                {_id:"131221adwsfweqewq6", priority_name:"High"},
                {_id:"131221adwsfweqewq7", priority_name:"Highest"},
                {_id:"131221adwsfweqewq8", priority_name:"Blocker"}
                ],
            column_array:[
                {_id: "5c2e30e4fe742a43f0e08eb8",column_name: "TODO", board_id: "5c2e30e4fe742a43f0e08eb6"},
                {_id: "5c2e30e4fe742a43f0e08eb9",column_name: "In progress",board_id:"5c2e30e4fe742a43f0e08eb6"},
                {_id: "5c2e30e4fe742a43f0e08eba",column_name: "Code review",board_id:"5c2e30e4fe742a43f0e08eb6"},
                {_id: "5c2e30e4fe742a43f0e08ebb",column_name: "Done",board_id:"5c2e30e4fe742a43f0e08eb6"}
                ],
            board_array:[
                {_id: "5c2e30e4fe742a43f0e08eb8",board_name: "testBoard1"},
                {_id: "5c2e30e4fe742a43f0e08eb6",board_name: "testBoard2"},
                {_id: "5c2e30e4fe742a43f0e08eb7",board_name: "testBoard3"}
            ]
        };
    }

    /*makeUpdateRequest(formData){
        return axios.put(`http://localhost:3000/issues/${this.props._id}`, formData,
            {headers: localStorage.getItem('token')})
            .then((response)=>{
                this.setState({
                    column_id: response.data.column_id,
                    issue_name: response.data.name,
                    priority_id: response.data.priority_id,
                    assignee_id: response.data.assignee_id,
                    description: response.data.description,
                    estimation: response.data.estimation,
                });
                this.makeBoardsRequest();
                this.makeAssigneeRequest();
                this.makePriorityRequest();
            })
    }*/
    makeReporterRequest(){
        return axios.get(`http://localhost:3000/users/${this.props.reporter_id}`,
            {headers: localStorage.getItem('token')})
            .then((response)=>{
                this.setState( {
                    reporter_email: response.data.email
                })

            })
            .catch((error)=>{
                console.error(error);
            })
    }

    makeBoardsRequest(){
        return axios.get(`http://localhost:3000/boards/`,
            { headers: localStorage.getItem('token') })
            .then((response) => {
                this.setState( {
                    board_array: response.data
                })

            })
            .catch((error) => {
                console.error(error);
            })
    }

    makeAssigneeRequest(){
        return axios.get(`http://localhost:3000/users/`,
            {headers: localStorage.getItem('token')})
            .then((response)=>{
                this.setState( {
                    assignee_array: response.data.result
                })
            })
            .catch((error)=>{
                console.error(error);
            })
    }

    makeBoardColumnsRequest(){
        /*const boardId = window.location.href.slice(window.location.href.lastIndexOf('/') + 1);*/
        return axios.get(`http://localhost:3000/api/columns/${this.props.board_id}`,
            { headers: { token: localStorage.getItem('token') } })
            .then((response)=>{
                this.setState({ column_array: response.data.gotColumns })
            })
            .catch((error)=>{
                console.error(error);
            })
    }

    makePriorityRequest(){
        return axios.get(`http://localhost:3000/api/priorities/`,
            { headers: { token: localStorage.getItem('token') } })
            .then((response)=>{
                this.setState({ priority_array: response.data.gotPriorities })
            })
            .catch((error)=>{
                console.error(error);
            })
    }

    componentDidMount(){
        /*this.makeReporterRequest();
        this.makeAssigneeRequest();
        this.makePriorityRequest();
        this.makeBoardsRequest();*/
    }

    render(){
        return(
            <IssueView
                board_array = {this.state.board_array}
                reporter_email = {this.state.reporter_email}
                assignee_array = {this.state.assignee_array}
                current_assignee_id = {this.props.current_assignee_id}
                issue_name = {this.props.issue_name}
                column_array = {this.state.column_array}
                current_column_id = {this.props.current_column_id}
                description = {this.props.description}
                priority_array = {this.state.priority_array}
                estimation = {this.props.estimation}
                current_priority_id = {this.props.current_priority_id}
                makeUpdateRequest = { ( formData ) => {this.makeUpdateRequest(formData) } }
            />
        )
    }
}

IssueViewContainer.propTypes = {
    reporter_id: propTypes.string.isRequired,
    issue_id: propTypes.string.isRequired,
    current_assignee_id: propTypes.string,
    current_column_id: propTypes.string,
    current_priority_id: propTypes.string,
    description: propTypes.string,
    issue_name: propTypes.string.isRequired,
    estimation: propTypes.string,
};

export default IssueViewContainer;
