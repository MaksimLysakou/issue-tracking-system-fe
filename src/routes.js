import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './containers/LogIn/LogIn';
import RegistrationPage from './containers/Registration/Registration';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/login" component = { LoginPage }/>
            <Route path="/register" component = { RegistrationPage }/>
        </Switch>
    )
};

export default Routes;
