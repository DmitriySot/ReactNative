import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import images from '../ducks/images'

const reducers = combineReducers({images})

const store = createStore(reducers, {}, applyMiddleware(thunk))


export default store
