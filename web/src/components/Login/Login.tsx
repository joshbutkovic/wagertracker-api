import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useHistory, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PageSection from '../Layout/PageSection';
import { BASE } from '../../config/urls';
import { tokenAuth } from '../../graphql/mutations';
import { Auth } from '../../store/reducers/authReducer';
import { setAuth } from '../../store/actions/authActions';

interface LoginForm {
    username: string;
    password: string;
}

function Login() {
    const [loginErrorMessage, setLoginErrorMessage] = useState<string>('');
    const token = useSelector((state: Auth) => state.auth.token);
    const { register, handleSubmit, errors } = useForm<LoginForm>();
    const history = useHistory();
    const dispatch = useDispatch();

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
                console.log(res);
                const { errors, data } = res.data;
                if (errors && errors[0].message) {
                    setLoginErrorMessage(errors[0].message);
                }
                if (data && data.tokenAuth) {
                    setAuth(
                        {
                            id: data.tokenAuth.user.id,
                            token: data.tokenAuth.token,
                            username: data.tokenAuth.user.username,
                        },
                        dispatch,
                        history,
                    );
                }
            });
    });

    return !token ? (
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
    ) : (
        <Redirect to="/dashboard" />
    );
}

export default Login;
