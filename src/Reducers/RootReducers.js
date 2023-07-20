import {combineReducers} from 'redux'
import CountReducer from './Count';
import AuthReducer from './Auth';
import ApiCall from './ApiCall';



export default combineReducers({
CountReducer , AuthReducer ,  ApiCall
})