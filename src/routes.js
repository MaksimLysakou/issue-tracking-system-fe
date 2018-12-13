import React from 'react';
import { Switch, Route } from 'react-router-dom'
import LoginPage from './components/LoginPage';
import CreateIssue from './components/CreateIssue';
import EditIssue from './components/EditIssue';
import ViewIssue from './components/ViewIssue';
import Page404 from './components/Page404'
const Routes = (props) =>(
    <Switch>
        <Route path="/q" component={LoginPage}/>
        <Route path="/create-issue" component={CreateIssue}/>
        <Route path="/edit-issue" component={EditIssue}/>
        <Route path="/view-issue" component={ViewIssue}/>
        <Route path="/page-404" component={Page404}/>
        {/*<Route path="*" component={NotFound}/>*/}
    </Switch>
);

export  default Routes;
