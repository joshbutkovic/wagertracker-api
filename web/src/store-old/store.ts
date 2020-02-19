import { createContext } from 'react';
import { AuthState } from './reducers/authReducer';
const authContext = createContext({});

export const Provider = authContext.Provider;
export const Consumer = authContext.Consumer;

export default authContext;
