import { combineReducers } from 'redux'
import product from './productReducer'
import user from './userReducer'
import provider from './providerReducer'

export default combineReducers({
    product,
    user,
    provider,
})
