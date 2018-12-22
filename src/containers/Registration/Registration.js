import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import RegistrationPage from "../../components/RegistrationPage/index";

class Registration extends Component{
    constructor(props){
        super(props);
        this.state = { shouldRedirect : false };
    }
    makeRegistrationRequest(formData){
        return axios.post(`http://localhost:3000/api/users/register`, formData)
            .then((response) => {
                    this.setState({shouldRedirect: true});
                    if (this.state.shouldRedirect) {
                        return <Redirect to='/login'/>
                    }
                }
            )
            .catch((error) => {
                console.error(error);
            })
    }

    render(){
        return(
            <RegistrationPage onRegistration={ ( formData ) => { this.makeRegistrationRequest(formData)}}/>
        )
    }
}

export default Registration;
