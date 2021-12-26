import {combineReducers} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import appReducer from './appReducer/AppReducer'
import todoReducer from './todoReducer/TodoReducer'
import auth from './authReducer'

const rootReducer = combineReducers({
    todo: todoReducer,
    app: appReducer,
    auth
})

const store = configureStore({reducer: rootReducer })

export default store