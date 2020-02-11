import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import PageSection from '../Layout/PageSection';
import authContext from '../../store/store';

interface LoginForm {
    username: string;
    password: string;
}

function Login() {
    const { register, handleSubmit, errors } = useForm<LoginForm>();
    const onSubmit = handleSubmit(({ username, password }) => {});
    const [state, dispatch] = useContext<any>(authContext);
    const { isLoggedIn, error } = state;

    return (
        <PageSection container>
            <form onSubmit={onSubmit} className="box column is-6 is-offset-3">
                <h1 className="is-size-3" style={{ marginBottom: '1rem' }}>
                    Please Login
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
