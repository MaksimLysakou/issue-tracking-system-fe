import React, { PureComponent } from 'react';
import axios from 'axios';
import IssueViewCreate from "../../components/IssueViewCreate";

class IssueViewCreateContainer extends PureComponent{
  constructor(props){
    super(props);
    this.state = {
    }
  };


  makeCreateIssueRequest(formData){
      return axios.post(`http://localhost:3000/issues/`, formData,
        { headers: { token: localStorage.getItem('token') } })
        .then()
        .catch((error) =>{
          console.error(error);
        })
  }

  makeBoardsRequest(){
    return axios.get(`http://localhost:3000/boards/`,
      { headers: {token: localStorage.getItem('token')} })
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
      {headers: {token: localStorage.getItem('token')}})
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
    this.makeAssigneeRequest();
    this.makePriorityRequest();
    this.makeBoardsRequest();
  }

  render(){
    return(
      <IssueViewCreate
        board_array = {this.state.board_array}
        assignee_array = {this.state.assignee_array}
        column_array = {this.state.column_array}
        priority_array = {this.state.priority_array}
        makeCreateIssueRequest = { ( formData ) => {this.makeCreateIssueRequest(formData) } }
      />
    )
  }
}

export default IssueViewCreateContainer;
