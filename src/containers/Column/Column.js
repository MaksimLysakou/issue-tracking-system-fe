import React, { PureComponent } from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import Column from "../../components/Column";

class ColumnContainer extends PureComponent{
    constructor(props){
        super(props);
        this.state = { data: [
                {
                    _id: "5c2e3781113e7b42b83ac8b0",
                    assignee_id: "",
                    description: "",
                    name: "testIssue",
                    estimation: "1 m/d",
                    column_id: "5c2e30e4fe742a43f0e08eb8",
                    priority_id: "5c18db05b61f53194c8cdb2c",
                    __v: 0
                },
                {
                    _id: "5c2e3784113e7b42b83ac8b1",
                    assignee_id: "",
                    description: "",
                    name: "testIssue",
                    estimation: "1 m/d",
                    column_id: "5c2e30e4fe742a43f0e08eb8",
                    priority_id: "5c18db05b61f53194c8cdb2c",
                    __v: 0
                },
                {
                    _id: "5c2e3785113e7b42b83ac8b2",
                    assignee_id : "",
                    description : "",
                    name : "testIssue",
                    estimation : "1 m/d",
                    column_id : "5c2e30e4fe742a43f0e08eb8",
                    priority_id : "5c18db05b61f53194c8cdb2c",
                    __v : 0
                }
            ]
        };
    }

    componentDidMount(){
        /*this.makeIssueRequest()*/
    }

    makeIssueRequest(){
        return axios.get(`http://localhost:3000/api/issues/?column_id=${this.props.column_id}`,
            {
                headers: { token: localStorage.getItem('token')}
            })
            .then((response)=>{
                this.setState({ data: response.data.gotIssues })
            })
            .catch((error) =>{
                console.error(error);
            })
    }
    render(){
        return(
            <Column data = {this.state.data} name={this.props.column_name}/>
        )
    }
}

ColumnContainer.propTypes = {
    column_name: propTypes.string.isRequired,
    column_id: propTypes.string.isRequired
};

export default ColumnContainer;
