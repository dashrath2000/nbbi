import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './reducers'

const verifyAuth = (store) => (next) => (action) => {
    if (action.payload) {
        if (action.payload.error === 'Invalid token') {
            action.type = 'LOGOUT_FULFILLED'
        }
    }
    next(action)
}

const middleware = applyMiddleware(promiseMiddleware(), logger, verifyAuth)
const initialState = {}
export default createStore(reducer, initialState, middleware)
