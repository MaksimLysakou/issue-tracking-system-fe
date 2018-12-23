import React, { PureComponent } from 'react';
import axios from 'axios';
import propTypes from 'prop-types'
import BacklogIssue from "../../components/BacklogIssue";

class BacklogIssueContainer extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            firstName:'',
            lastName:''
        };
    }

    componentDidMount(){
        this.makeAssigneeRequest();
        this.makePriorityRequest();
    }

    makeAssigneeRequest(){
        return axios.get(`http://localhost:3000/users/${this.props.assigneeId}`,
            {headers: localStorage.getItem('token')})
            .then((response)=>{
                this.setState( {
                    firstName: response.data.first_name,
                    lastName: response.data.last_name
                })

            })
            .catch((error)=>{
                console.error(error);
            })
    }

    makePriorityRequest(){
        return axios.get(`http://localhost:3000/priorities/${this.props.priorityId}`,
            {headers: localStorage.getItem('token')})
            .then((response)=>{
                this.setState({
                    priorityName: response.data.priority_name
                })

            })
            .catch((error)=>{
                console.error(error);
            })
    }
    render(){
        return(
            <BacklogIssue
                firstName={ this.state.firstName }
                lastName={ this.state.lastName }
                name={ this.props.name }
                priorityName={ this.state.priorityName}
            />
        )
    }
}

BacklogIssueContainer.propTypes={
    assigneeId: propTypes.string,
    name: propTypes.string.isRequired,
    priorityId: propTypes.string

};

export default BacklogIssueContainer
