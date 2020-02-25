import React from 'react';
import { useForm } from 'react-hook-form';
import PageSection from './Layout/PageSection';

interface CreateWager {}

interface CreateWagerForm {
    duration: string;
    bet_id: number;
}

function CreateWager() {
    const { register, handleSubmit, errors } = useForm<CreateWagerForm>();
    const onSubmit = handleSubmit(({ duration }) => {});

    return (
        <PageSection container>
            <form onSubmit={onSubmit} className="box column is-6 is-offset-3">
                <h1 className="is-size-5" style={{ marginBottom: '1rem' }}>
                    Create A Wager
                </h1>
                <div className="field">
                    <label className="label">Duration</label>
                    <div className="control">
                        <div className="select">
                            <select
                                ref={register({ required: true })}
                                name="duration"
                                className={`input${errors.duration ? ' is-danger' : ''}`}
                            >
                                <option value="FG" selected>
                                    FG
                                </option>
                                <option value="1H">1H</option>
                                <option value="2H">2H</option>
                            </select>
                        </div>
                    </div>
                    {errors.duration && <p className="help is-danger">Duration is required</p>}
                </div>
                <div className="field">
                    <label className="label">Bet ID</label>
                    <div className="control">
                        <input
                            ref={register({ required: true, maxLength: 32 })}
                            name="bet_id"
                            type="number"
                            maxLength={32}
                            placeholder="BET 999"
                            className={`input${errors.bet_id ? ' is-danger' : ''}`}
                        />
                    </div>
                    {errors.bet_id && <p className="help is-danger">Bet ID is required</p>}
                </div>
                <button type="submit" className="button is-success">
                    Create
                </button>
            </form>
        </PageSection>
    );
}

export default CreateWager;
