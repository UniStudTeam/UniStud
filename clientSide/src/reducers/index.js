//To bring together all other reducers

import {combineReducers} from 'redux';
import userReducer from './userReducer';
import loginReducer from './loginReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';



export default combineReducers({ //as many as we want inside this
    users: userReducer,
    logIn: loginReducer,
    error: errorReducer,
    auth: authReducer
});


//A helpful acronym I used in the beginning to understand the steps in redux is CARS.
//component -> actions -> reducer -> store
//So hit click, pass the id to the actions, pass the payload in actions to the reducer, and then into the store.

