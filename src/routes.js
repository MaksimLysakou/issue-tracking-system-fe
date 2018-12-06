import React from 'react';
import { Switch, Route } from 'react-router-dom'
import LoginPage from './components/LoginPage';
import CreateIssue from './components/CreateIssue';

const Routes = (props) =>(
    <Switch>
        <Route path="/q" component={LoginPage}/>
        <Route path="/create-issue" component={CreateIssue}/>
        {/*<Route path="*" component={NotFound}/>*/}
    </Switch>
);

export  default Routes;
