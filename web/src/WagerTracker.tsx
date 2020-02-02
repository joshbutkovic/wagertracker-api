import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Registration from './components/Registration';
import Button from './components/Button';
import './WagerTracker.css';

export default function WagerTracker() {
    const handleClick = () => {
        console.log('click');
    };

    return (
        <div className="WagerTracker">
            <Button onClick={handleClick} classes="is-primary" />
            {/* <Switch>
                <Route path="/registration" component={Registration} exact />
            </Switch> */}
        </div>
    );
}
