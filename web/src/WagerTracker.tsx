import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainMenu from './components/Layout/MainMenu/MainMenu';
import Registration from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Welcome from './components/Welcome/Welcome';
import Dashboard from './components/Dashboard';
import CreateWager from './components/CreateWager';
import './WagerTracker.css';
import AuthenticatedRoute from './components/AuthenticatedRoute';

export default function WagerTracker() {
    return (
        <div className="WagerTracker">
            <div className="columns">
                <div className="column is-2" style={{ paddingRight: '0' }}>
                    <MainMenu />
                </div>
                <div className="column" style={{ paddingLeft: '0' }}>
                    <Switch>
                        <Route path="/" component={Welcome} exact />
                        <Route path="/registration" component={Registration} exact />
                        <Route path="/login" component={Login} exact />
                        <AuthenticatedRoute path="/dashboard" component={Dashboard} exact />
                        <AuthenticatedRoute path="/create" component={CreateWager} exact />
                    </Switch>
                </div>
            </div>
        </div>
    );
}
