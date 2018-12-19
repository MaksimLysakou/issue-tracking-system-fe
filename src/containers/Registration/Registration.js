import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import RegistrationPage from "../../components/RegistrationPage/RegistrationPage";

class Registration extends Component{
    constructor(props){
        super(props);
        this.state = { shouldRedirect: false };
    }
    makeRegistrationRequest(formData){
        return axios.post(`http://localhost:3000/api/users/register`, formData)
            .then((response) => {
                this.setState({ shouldRedirect: true });
            })
            .catch((error) => {
                console.error(error);
            })
    }

    render(){
        if (this.state.shouldRedirect) return <Redirect to="/login" />;
        return(
            <RegistrationPage onRegistration={ ( formData ) => { this.makeRegistrationRequest(formData)}}/>
        )
    }
}

export default Registration;
