import React, { useState, useEffect, ReactNode, Component } from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import axios from 'axios';
import { useSelector } from 'react-redux';
import PageSection from '../components/Layout/PageSection';
import { Auth } from '../store/reducers/authReducer';
import { BASE } from '../config/urls';
import { verifyToken } from '../graphql/mutations';

export interface AuthenticatedRouteProps extends RouteProps {
    component: React.FC;
}

function AuthenticatedRoute({ component: Component, path, ...rest }: AuthenticatedRouteProps) {
    const token = useSelector((state: Auth) => state.auth.token);
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        axios
            .post(BASE, {
                query: verifyToken,
                variables: {
                    token,
                },
            })
            .then(res => {
                const { data } = res.data;
                if (data.verifyToken) {
                    setData(data.verifyToken);
                }
            });
    }, [token]);

    const render = (props: any) => <Component {...props} />;

    if (!token) {
        return <Redirect to={{ pathname: '/login' }} />;
    }

    if (data) {
        return <Route path={path} render={render} {...rest} />;
    }
    return (
        <PageSection container>
            <p>Loading...</p>
        </PageSection>
    );
}

export default AuthenticatedRoute;
