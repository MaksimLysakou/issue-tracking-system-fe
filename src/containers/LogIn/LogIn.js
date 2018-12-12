import React, { Component } from 'react';
import axios from 'axios';
import LoginPage from '../../components/LoginPage/index';

class LogIn extends Component{
    constructor(props){
        super(props);
        this.state = { data: [] };
    }
    makeLogInRequest(formData) {
        return axios.post(`http://localhost:3000/api/users/login`, formData)
            .then((response)=>{
                console.info(response);
                localStorage.setItem('token', response.data.token);
            })
            .catch((error)=>{
                console.error(error);
            })

    }
    render(){
        return(
            <LoginPage makeLogInRequest = { ( formData ) => {this.makeLogInRequest(formData) } }/>
        )
    }

}

export default LogIn;
