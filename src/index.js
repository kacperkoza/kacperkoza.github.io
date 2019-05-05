import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers/app-reducer';
import App from "./components/App";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(appReducer, {}, enhancer);

const render = () =>
    ReactDOM.render(
        <Provider store={store}>
            <MuiThemeProvider>
                <App store={store}/>
            </MuiThemeProvider>
        </Provider>,
        document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

store.subscribe(render);

render();
