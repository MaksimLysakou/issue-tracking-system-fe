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
    makeReporterRequest(){
        return axios.get(`http://localhost:3000/users/${this.props.reporter_id}`,
            {headers: localStorage.getItem('token')})
            .then((response)=>{
                this.setState( {
                    email: response.data.email
                })

            })
            .catch((error)=>{
                console.error(error);
            })
    }
    makeAssigneeRequest(){
        return axios.get(`http://localhost:3000/users/`,
            {headers: localStorage.getItem('token')})
            .then((response)=>{
                this.setState( {
                    assignee_emails: response.data.result
                })
            })
            .catch((error)=>{
                console.error(error);
            })
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

    makeBoardIdRequest(){
        return axios.get(`http://localhost:3000/api/columns/${board_id}`,
            { headers: { token: localStorage.getItem('token') } })
            .then((response)=>{
                axios.get(`http//localhost:3000/api/columns/?column_id=${re}`)
                /*this.setState({ data: response.data.gotColumns })*/
            })
            .catch((error)=>{
                console.error(error);
            })
    }
    componentDidMount(){
        this.makeReporterRequest();
        this.makeAssigneeRequest()
    }
    render(){
        return(
            <IssueView
                reporter_email={this.state.reporter_email}
                assignee_emails={this.state.assignee_emails}
                name={}
                column_names={}
                priority_names={}
            />
        )
    }
}

IssueViewContainer.propTypes = {
    reporter_id: propTypes.string.isRequired,
    result: propTypes.array.isRequired,
};

export default IssueViewContainer;
