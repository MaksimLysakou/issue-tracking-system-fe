import React, { PureComponent } from 'react';
import axios from 'axios';
import propTypes from 'prop-types'
import IssueView from "../../components/IssueView/IssueView";

class IssueViewContainer extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            reporter_email:'',
            assignee_emails: [],
            name:'',
            column_names:[],
            priority_names:[]
        };
    }

    makeUpdateRequest(formData){
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
    }
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
                    boards: response.data
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
                    assignees: response.data.result
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
                this.setState({ data: response.data.gotColumns })
            })
            .catch((error)=>{
                console.error(error);
            })
    }

    makePriorityRequest(){
        return axios.get(`http://localhost:3000/api/priorities/`,
            { headers: { token: localStorage.getItem('token') } })
            .then((response)=>{
                this.setState({ priorities: response.data.gotPriorities })
            })
            .catch((error)=>{
                console.error(error);
            })
    }

    componentDidMount(){
        this.makeReporterRequest();
        this.makeAssigneeRequest();
        this.makePriorityRequest();
        this.makeBoardsRequest();
    }

    render(){
        return(
            <IssueView
                boards = {this.state.boards}
                reporter_email = {this.state.reporter_email}
                assignees = {this.state.assignees}
                current_assignee_id = {this.props.user_id}
                name = {this.props.name}
                columns = {this.state.columns}
                current_column_id = {this.props.column_id}
                priorities = {this.state.priorities}
                current_priority_id = {this.props.data.priority_id}
            />
        )
    }
}

IssueViewContainer.propTypes = {
    reporter_id: propTypes.string.isRequired,
    result: propTypes.array.isRequired,
};

export default IssueViewContainer;
