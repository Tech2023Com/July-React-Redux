import {createStore ,  applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import rootReducer from '../Reducers/RootReducers'



const persistedState  =  localStorage.getItem('reduxStore') ? JSON.parse(localStorage.getItem('reduxStore')) : {} 



const enhancer  =  applyMiddleware(thunk)


const store  =  createStore(
    rootReducer , persistedState , enhancer
)

export default store