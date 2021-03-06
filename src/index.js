import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedbackReducer = (state= [ ], action) => {
    if (action.type === 'ADD_FEELING') {
        //add feeling feedback to state
        console.log('feeling: ', action.payload);
        state = action.payload 
    } else if (action.type === 'ADD_UNDERSTANDING') {
        console.log('understanding: ', action.payload);
        state = {...state, ...action.payload}
        //add understanding feedback to state
    } else if (action.type === 'ADD_SUPPORT') {
        console.log('support: ', action.payload);
        state = {...state, ...action.payload}
        //add support feedback to state
    } else if (action.type === 'ADD_COMMENTS') {
        console.log('comment: ', action.payload);
        state = {...state, ...action.payload}
        //add comment feedback to state
    }
    return state
}

// Store
const storeInstance = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger)
  )


ReactDOM.render(<Provider store={ storeInstance }><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
