import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'

import reducer from './reducers'
import './include/bootstrap'
import './style.css'
import App from './App'

axios.defaults.baseURL = 'http://35.231.121.25/api'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
document.getElementById('root'));
