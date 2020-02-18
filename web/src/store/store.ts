import { createContext } from 'react';
import { AuthState } from '../store/reducers/authReducer';
const authContext = createContext({});

export const Provider = authContext.Provider;
export const Consumer = authContext.Consumer;

export default authContext;
