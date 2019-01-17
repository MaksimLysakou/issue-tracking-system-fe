import React, { PureComponent } from 'react';
import axios from 'axios';
import propTypes from 'prop-types'
import IssueView from "../../components/IssueView/IssueView";

class IssueViewContainer extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            reporter_email: '',
            issue_name: "No name",
            assignee_array:[],
            column_id: '',
            description: 'No description',
            estimation: 'No estimation',
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
                this.setState({ priority_array: response.data.priority_array })
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
                makeBoardColumnsRequest = { (formData) => {this.makeBoardColumnsRequest(formData)}}
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
