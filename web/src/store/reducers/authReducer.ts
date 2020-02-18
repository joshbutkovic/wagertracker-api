export interface AuthState {
    token: string;
    username: string;
    id: number | undefined;
    error: string;
}

export interface AuthAction {
    type: 'LOGIN' | 'LOGIN_ERROR' | 'LOGOUT';
    payload: AuthState;
}

export const initialAuthState: AuthState = {
    token: '',
    username: '',
    id: undefined,
    error: '',
};

export const authReducer = (state: AuthState, action: AuthAction) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                token: action.payload.token,
                username: action.payload.username,
                id: action.payload.id,
                error: '',
            };
        case 'LOGIN_ERROR':
            return {
                token: '',
                username: '',
                id: undefined,
                error: action.payload.error,
            };
        case 'LOGOUT':
            return {
                token: '',
                username: '',
                id: undefined,
                error: '',
            };
        default:
            return state;
    }
};
