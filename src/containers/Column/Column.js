import React, { PureComponent } from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import Column from "../../components/Column";

class ColumnContainer extends PureComponent{
    constructor(props){
        super(props);
        this.state = { data: [] };
    }

    componentDidMount(){
        this.makeIssueRequest()
    }

    makeIssueRequest(){
        return axios.get(`http://localhost:3000/api/issues/?column_id=${this.props.column_id}`,
            {
                headers: { token: localStorage.getItem('token')}
            })
            .then((response)=>{
                this.setState({ data: response.data.foundIssues })
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
