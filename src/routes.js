import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './containers/LogIn/LogIn';
import RegistrationPage from './containers/Registration/Registration';
// import BoardPage from './containers/Boards/Boards';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/login" component = { LoginPage }/>
            <Route path="/register" component = { RegistrationPage }/>
            {/*<Route path="/boards" component = { BoardPage }/>*/}
            {/*<Route path="*" component={NotFound}/>*/}
        </Switch>
    )
};

export default Routes;
