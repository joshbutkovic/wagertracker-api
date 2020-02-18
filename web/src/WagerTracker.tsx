import React, { useReducer, Dispatch } from 'react';
import { Route, Switch, Router, useHistory } from 'react-router-dom';
import { Provider } from './store/store';
import { authReducer, initialAuthState, AuthState, AuthAction } from './store/reducers/authReducer';
import MainMenu from './components/Layout/MainMenu/MainMenu';
import Registration from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Welcome from './components/Welcome/Welcome';
import Dashboard from './components/Dashboard';
import './WagerTracker.css';
import AuthenticatedRoute from './components/AuthenticatedRoute';

export default function WagerTracker() {
    const useAuthState: [AuthState, Dispatch<AuthAction>] = useReducer(
        authReducer,
        initialAuthState,
    );

    let history = useHistory();

    return (
        <Provider value={useAuthState}>
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
                        </Switch>
                    </div>
                </div>
            </div>
        </Provider>
    );
}
