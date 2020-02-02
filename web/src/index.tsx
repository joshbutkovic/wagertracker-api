import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './app.scss';
import WagerTracker from './WagerTracker';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <WagerTracker />
    </BrowserRouter>,
    document.getElementById('root'),
);
serviceWorker.unregister();
