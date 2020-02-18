import React, { useContext, useState } from 'react';
import PageSection from './Layout/PageSection';

interface Dashboard {}

function Dashboard() {
    return (
        <PageSection container>
            <h1 className="is-size-2">Your Dashboard</h1>
        </PageSection>
    );
}

export default Dashboard;
