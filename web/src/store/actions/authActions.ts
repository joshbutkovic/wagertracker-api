import { Dispatch } from 'react';
import { Action } from 'redux';
import { History } from 'history';

interface ReduxAuth {
    id: number;
    token: string;
    username: string;
}

export interface DispatchAction extends Action {
    payload: Partial<ReduxAuth>;
}

export const setAuth = (auth: ReduxAuth, dispatch: Dispatch<DispatchAction>) => {
    const { id, token, username } = auth;
    dispatch({
        type: 'LOGIN',
        payload: {
            id,
            token,
            username,
        },
    });
};

// export const setAuth = (auth: ReduxAuth, dispatch: Dispatch<DispatchAction>, history: History) => {
//     const { id, token, username } = auth;
//     dispatch({
//         type: 'LOGIN',
//         payload: {
//             id,
//             token,
//             username,
//         },
//     });
//     history.push('dashboard');
// };
