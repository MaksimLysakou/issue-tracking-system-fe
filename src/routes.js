import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './containers/LogIn/LogIn';
import RegistrationPage from './containers/Registration/Registration';
import BoardPage from './containers/Boards/Boards';
import Backlog from "./containers/Backlog/Backlog";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/login" component = { LoginPage }/>
            <Route path="/register" component = { RegistrationPage }/>
            <Route path="/boards" component = { BoardPage }/>
            <Route path="/backlog" component = { Backlog }/>
            <Redirect to="/login" />
        </Switch>
    )
};

export default Routes;
