export interface AuthState {
    loggedIn: boolean;
    username: string;
    error: string;
}

export interface AuthAction {
    type: 'LOGIN' | 'LOGIN_ERROR' | 'LOGOUT';
    payload: AuthState;
}

export const initialAuthState: AuthState = {
    loggedIn: false,
    username: '',
    error: '',
};

export const authReducer = (state: AuthState, action: AuthAction) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                loggedIn: true,
                username: action.payload.username,
                error: '',
            };
        case 'LOGIN_ERROR':
            return {
                loggedIn: false,
                username: '',
                error: action.payload.error,
            };
        case 'LOGOUT':
            return {
                loggedIn: false,
                username: '',
                error: '',
            };
        default:
            return state;
    }
};
