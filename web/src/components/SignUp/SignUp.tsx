import React from 'react';
import { useForm } from 'react-hook-form';
import PageSection from '../Layout/PageSection';

interface RegistrationForm {
    username: string;
    email: string;
    password: string;
    passwordConfirmation: string;
}

function Registration() {
    const { register, handleSubmit, watch, errors } = useForm<RegistrationForm>();
    const onSubmit = handleSubmit(({ username, email, password, passwordConfirmation }) => {});

    return (
        <PageSection container>
            <form onSubmit={onSubmit} className="box column is-6 is-offset-3">
                <h1 className="is-size-3" style={{ marginBottom: '1rem' }}>
                    Sign up for Free
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
                    <label className="label">Email</label>
                    <div className="control">
                        <input
                            ref={register({
                                required: true,
                                pattern: /^\S+@\S+\.\S+$/i,
                                maxLength: 128,
                            })}
                            name="email"
                            type="email"
                            placeholder="e.g. email@email.com"
                            className={`input${errors.email ? ' is-danger' : ''}`}
                        />
                    </div>
                    {errors.email && <p className="help is-danger">A valid Email is required</p>}
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
                    {errors.email && <p className="help is-danger">Password is required</p>}
                </div>
                <div className="field">
                    <label className="label">Confirm Password</label>
                    <div className="control">
                        <input
                            ref={register({
                                required: true,
                                maxLength: 132,
                                validate: value =>
                                    value === watch('password') ||
                                    'Matching passwords are required',
                            })}
                            name="passwordConfirmation"
                            type="password"
                            placeholder="*******"
                            className={`input${errors.passwordConfirmation ? ' is-danger' : ''}`}
                        />
                    </div>
                    {errors.passwordConfirmation && (
                        <p className="help is-danger">Matching and valid passwords are required</p>
                    )}
                </div>
                <button type="submit" className="button is-success">
                    Sign Up
                </button>
            </form>
        </PageSection>
    );
}

export default Registration;
