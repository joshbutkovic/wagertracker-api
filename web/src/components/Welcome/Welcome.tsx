import React from 'react';
import PageSection from '../Layout/PageSection';
import './Welcome.scss';

function Welcome() {
    return (
        <PageSection container>
            <h1 className="is-size-2">Welcome to WagerTracker</h1>
            <p>Bet by Bet We Build! </p>
        </PageSection>
    );
}

export default Welcome;
