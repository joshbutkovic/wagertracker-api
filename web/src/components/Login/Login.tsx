import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom';
import PageSection from '../Layout/PageSection';
import authContext from '../../store/store';
import { BASE } from '../../config/urls';
import { tokenAuth } from '../../graphql/mutations';

interface LoginForm {
    username: string;
    password: string;
}

function Login() {
    const [loginErrorMessage, setLoginErrorMessage] = useState<string>('');
    const [state, dispatch] = useContext<any>(authContext);
    const { token, error } = state;
    const { register, handleSubmit, errors } = useForm<LoginForm>();
    const history = useHistory();

    const onSubmit = handleSubmit(({ username, password }) => {
        axios
            .post(BASE, {
                query: tokenAuth,
                variables: {
                    username,
                    password,
                },
            })
            .then(res => {
                const { errors, data } = res.data;
                if (errors && errors[0].message) {
                    dispatch({
                        type: 'LOGIN_ERROR',
                        payload: { error: errors[0].message },
                    });
                }
                if (data && data.tokenAuth) {
                    dispatch({
                        type: 'LOGIN',
                        payload: {
                            token: data.tokenAuth.token,
                            username: data.tokenAuth.user.username,
                            id: data.tokenAuth.user.id,
                        },
                    });
                    history.push('dashboard');
                }
            });
    });

    if (token.length === 0) {
        return (
            <PageSection container>
                <form onSubmit={onSubmit} className="box column is-6 is-offset-3">
                    <h1 className="is-size-5" style={{ marginBottom: '1rem' }}>
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
    } else {
        return <Redirect to="/dashboard" />;
    }
}

export default Login;
