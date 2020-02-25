import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import WagerTracker from './WagerTracker';
import client from './apollo/index';
import * as serviceWorker from './serviceWorker';
import './app.scss';

ReactDOM.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <WagerTracker />
        </BrowserRouter>
    </ApolloProvider>,

    document.getElementById('root'),
);
serviceWorker.unregister();
