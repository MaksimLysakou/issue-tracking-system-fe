import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';

const Routes = () =>(
    <Switch>
        <Route exact path="/login" component={LoginPage}/>
        <Route path="/register" component={RegistrationPage}/>
        {/*<Route path="*" component={NotFound}/>*/}
    </Switch>
);

export  default Routes;
