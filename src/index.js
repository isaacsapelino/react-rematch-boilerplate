import React from 'react'
import ReactDOM from 'react-dom';
import App from './components/App';
import { init } from '@rematch/core';
import { Count } from './models';
import { Provider } from 'react-redux';

const store = init({
    models: {
        Count,
    }
})

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>, document.getElementById('app'));