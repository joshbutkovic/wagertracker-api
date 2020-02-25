import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, Redirect } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { useApolloClient } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import PageSection from '../Layout/PageSection';
import { BASE } from '../../config/urls';
import { tokenAuth } from '../../graphql/mutations';

interface LoginForm {
    username: string;
    password: string;
}

interface RouterState {
    message: string;
}

interface State {
    state: RouterState;
}

export interface RouterProps {
    location: State;
}

const LOGIN = gql`
    mutation tokenAuth($username: String!, $password: String!) {
        tokenAuth(username: $username, password: $password) {
            token
            user {
                id
                username
            }
        }
    }
`;

function Login(props: RouterProps) {
    const { state } = props.location;
    const [loginErrorMessage, setLoginErrorMessage] = useState<string>('');
    const { register, handleSubmit, errors } = useForm<LoginForm>();
    const [login, { data }] = useMutation(LOGIN);
    const history = useHistory();
    const client = useApolloClient();

    const onSubmit = handleSubmit(({ username, password }) => {
        login({ variables: { username, password } });
    });

    // const checkCookieForValidToken = () => {
    //     if (typeof cookies.verifyToken !== 'undefined') {
    //         if (cookies.verifyToken.payload.exp < new Date().getTime() / 1000) {
    //             removeCookie('verifyToken');
    //             return false;
    //         } else {
    //             return true;
    //         }
    //     }
    // };

    // if (token || checkCookieForValidToken()) return <Redirect to="dashboard" />;
    if (data && data.tokenAuth.token) {
        client.writeData({ data: { tokenAuth: data.tokenAuth } });
        return <Redirect to="/dashboard" />;
    }

    return (
        <PageSection container>
            <form onSubmit={onSubmit} className="box column is-6 is-offset-3">
                <h1 className="is-size-5" style={{ marginBottom: '1rem' }}>
                    {state && state.message}
                    {loginErrorMessage ? 'Enter valid credentials' : 'Please Login'}
                </h1>
                <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                        <input
                            ref={register({ required: true, maxLength: 32 })}
                            name="username"
                            type="text"
                            placeholder="e.g. youruser123"
                            className={`input${errors.username ? ' is-danger' : ''}`}
                        />
                    </div>
                    {errors.username && <p className="help is-danger">Username is required</p>}
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input
                            ref={register({ required: true, maxLength: 32 })}
                            name="password"
                            type="password"
                            placeholder="*******"
                            className={`input${errors.password ? ' is-danger' : ''}`}
                        />
                    </div>
                    {errors.password && <p className="help is-danger">Password is required</p>}
                </div>
                <button type="submit" className="button is-success">
                    Login
                </button>
            </form>
        </PageSection>
    );
}

export default Login;
