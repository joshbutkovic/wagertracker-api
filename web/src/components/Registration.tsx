import React, { useState } from 'react';

interface RegistrationState {
    username: string;
    password: string;
    passwordConfirmation: string;
}

function Registration() {
    const [registrationForm, setRegistrationForm] = useState<RegistrationState>({
        username: '',
        password: '',
        passwordConfirmation: '',
    });
    return <div></div>;
}

export default Registration;
