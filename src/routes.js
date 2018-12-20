import React from 'react';
import { Switch, Route } from 'react-router-dom'
import LoginPage from './components/LoginPage';
import CreateIssue from './containers/Create/IntegrationCreate';
import EditIssue from './containers/Edit/IntegrationEdit';
import ViewIssue from './containers/View/IntegrationView';
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
