import { combineReducers } from 'redux';
import loginReducer from './login/loginReducer';

 export default combineReducers({
    userDetails: loginReducer
});