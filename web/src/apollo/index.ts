import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { persistCache } from 'apollo-cache-persist';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BASE } from '../config/urls';

type AuthToken = {
    token: string | null;
};

type AuthUser = {
    id: number | null;
    username: string;
};

interface AuthData {
    tokenAuth: {
        token: AuthToken | null;
        user: AuthUser;
    };
}
const cache = new InMemoryCache();

const initApollo = async () => {
    await persistCache({
        cache,
        // @ts-ignore
        storage: window.sessionStorage,
    });
};

const client = new ApolloClient({
    cache,
    uri: BASE,
});

const data: AuthData = {
    tokenAuth: {
        token: null,
        user: {
            id: null,
            username: '',
        },
    },
};

cache.writeData({ data });

// client.onResetStore(() => cache.writeData({ data }));

initApollo();

export default client;
