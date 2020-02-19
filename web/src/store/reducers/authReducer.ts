// export default function(state = initialState, action) {
//     switch (action.type) {
//         case GET_CURRENT_WEATHER_BY_ZIP:
//             return {
//                 ...state,
//                 currentWeather: action.payload,
//             };
//         case GET_CURRENT_WEATHER_BY_CITY:
//             return {
//                 ...state,
//                 currentWeather: action.payload,
//             };
//         case CLEAR_WEATHER:
//             return {
//                 ...state,
//                 currentWeather: action.payload,
//                 forecast: [],
//             };
//         case GET_FORECAST_BY_ZIP:
//             return {
//                 ...state,
//                 forecast: action.payload,
//             };
//         case GET_FORECAST_BY_CITY:
//             return {
//                 ...state,
//                 forecast: action.payload,
//             };
//         default:
//             return state;
//     }
// }

export interface AuthState {
    id: number | null;
    token: string;
    username: string;
    error: string;
}

export interface Auth {
    auth: AuthState;
}

export interface AuthAction {
    type: 'LOGIN' | 'LOGIN_ERROR' | 'LOGOUT';
    payload: AuthState;
}

export const initialAuthState: AuthState = {
    id: null,
    token: '',
    username: '',
    error: '',
};

export default function(state: AuthState = initialAuthState, action: AuthAction) {
    switch (action.type) {
        case 'LOGIN':
            return {
                id: action.payload.id,
                token: action.payload.token,
                username: action.payload.username,
                error: '',
            };
        case 'LOGIN_ERROR':
            return {
                id: null,
                token: '',
                username: '',
                error: action.payload.error,
            };
        case 'LOGOUT':
            return {
                id: null,
                token: '',
                username: '',
                error: '',
            };
        default:
            return state;
    }
}
