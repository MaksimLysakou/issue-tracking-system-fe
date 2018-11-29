import React from 'react';
import { Switch, Route } from 'react-router-dom'
import LoginPage from './components/LoginPage';

const Routes = (props) =>(
    <Switch>
        <Route path="/q" component={LoginPage}/>
        {/*<Route path="*" component={NotFound}/>*/}
    </Switch>
);

export  default Routes;
