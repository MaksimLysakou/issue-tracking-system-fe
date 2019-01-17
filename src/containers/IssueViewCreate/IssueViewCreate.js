import React, { PureComponent } from 'react';
import axios from 'axios';
import IssueViewCreate from "../../components/IssueViewCreate";

class IssueViewCreateContainer extends PureComponent{
  constructor(props){
    super(props);
    this.state = {
      priority_array:[],
      column_array:[],
      board_array:[],
      assignee_array:[],
    }
  };


  makeCreateIssueRequest(formData){
    console.log("formData в запросе",formData);
      return axios.post(`http://localhost:3000/api/issues/`, formData,
        { headers: { token: localStorage.getItem('token') } })
        .then((response) =>{
          console.log(response);
        })
        .catch((error) =>{
          console.error(error);
        })
  }

  makeBoardsRequest(){
    return axios.get(`http://localhost:3000/api/boards/`,
      { headers: {token: localStorage.getItem('token')} })
      .then((response) => {
        this.setState( {
          board_array: response.data.board_array
        })

      })
      .catch((error) => {
        console.error(error);
      })
  }

  makeAssigneeRequest(){
    return axios.get(`http://localhost:3000/api/users/`,
      {headers: {token: localStorage.getItem('token')}})
      .then((response)=>{
        this.setState({ assignee_array: response.data.users_array })
      })
      .catch((error)=>{
        console.error(error);
      })
  }

  makeBoardColumnsRequest(formData){
    /*const boardId = window.location.href.slice(window.location.href.lastIndexOf('/') + 1);*/
    return axios.get(`http://localhost:3000/api/columns/${formData}`,
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
    this.makeAssigneeRequest();
    this.makePriorityRequest();
    this.makeBoardsRequest();
    this.makeBoardColumnsRequest();
  }

  render(){
    return(
      <IssueViewCreate
        board_array = {this.state.board_array}
        assignee_array = {this.state.assignee_array}
        column_array = {this.state.column_array}
        priority_array = {this.state.priority_array}
        makeBoardColumnsRequest = { (formData) => {this.makeBoardColumnsRequest(formData)}}
        makeCreateIssueRequest = { ( formData ) => {this.makeCreateIssueRequest(formData) } }
      />
    )
  }
}

export default IssueViewCreateContainer;
