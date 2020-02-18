import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router';
import authContext from '../store/store';

function AuthenticatedRoute({ component: Component, ...props }: RouteProps) {
    if (!Component) return null;
    const auth = true;
    return (
        <Route
            {...props}
            render={innerProps => (auth ? <Component {...innerProps} /> : <Redirect to="/login" />)}
        />
    );
}

export default AuthenticatedRoute;
