import React, { PureComponent } from 'react';
import axios from 'axios';
import propTypes from 'prop-types'
import Issue from "../../components/Issue";

class IssueContainer extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
          issue_name :'',
          reporter_id :'',
          assignee_id :'',
          priority_id :'',
          column_id :'',
          description :'',
          estimation :'',
          issue_id :'',
        };
    }

    componentDidMount(){
        this.makeAssigneeRequest();
        this.makePriorityRequest();
    }

    makeAssigneeRequest(){
        return axios.get(`http://localhost:3000/users/${this.props.assignee_id}`,
            {headers: localStorage.getItem('token')})
            .then((response)=>{
                this.setState( {
                    assignee_email: response.data.email,
                })

            })
            .catch((error)=>{
                console.error(error);
            })
    }

    makePriorityRequest(){
        return axios.get(`http://localhost:3000/priorities/${this.props.priority_id}`,
            {headers: localStorage.getItem('token')})
            .then((response)=>{
                this.setState({
                    priority_name: response.data.priority_name
                })

            })
            .catch((error)=>{
                console.error(error);
            })
    }
    render(){
        return(
            <Issue
                assignee_email = { this.state.assignee_email }
                issue_name = { this.props.issue_name }
                priority_name = { this.state.priority_name }
                reporter_id = { this.props.reporter_id }
                issue_id = { this.props.issue_id }
                current_assignee_id = { this.props.assignee_id }
                current_column_id = { this.props.column_id }
                current_priority_id = { this.props.priority_id }
                description = { this.props.description }
                estimation = { this.props.estimation }
            />
        )
    }
}
IssueContainer.defaultProps ={
  issue_name: '',
  reporter_id: '',
  assignee_id: '',
  priority_id: '',
  column_id: '',
  description: '',
  estimation: '',
  issue_id: '',
};

IssueContainer.propTypes={
    issue_name: propTypes.string.isRequired,
    reporter_id: propTypes.string,
    assignee_id: propTypes.string,
    priority_id: propTypes.string,
    column_id: propTypes.string,
    description: propTypes.string,
    estimation: propTypes.string,
    issue_id: propTypes.string.isRequired,
};

export default IssueContainer
