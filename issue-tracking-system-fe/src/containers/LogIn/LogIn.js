import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import LoginPage from '../../components/LoginPage';

class LogIn extends Component{
    constructor(props){
        super(props);
        this.state = { shouldRedirect: false };
    }
    makeLogInRequest(formData) {
        return axios.post(`http://localhost:3000/api/users/login`, formData)
            .then((response)=>{
                localStorage.setItem('token', response.data.token);
                this.setState({ shouldRedirect: true });
                if(this.state.shouldRedirect){
                    return <Redirect to = '/boards'/>
                }
            })
            .catch((error)=>{
                console.error(error);
            })

    }
    render(){
        if (this.state.shouldRedirect) return <Redirect to="/boards" />;
        return(
            <LoginPage makeLogInRequest = { ( formData ) => {this.makeLogInRequest(formData) } }/>
        )
    }

}

export default LogIn;
