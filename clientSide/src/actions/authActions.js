import axios from 'axios';
import {returnErrors} from './errorActions';

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    // LOGIN_SUCCESS,
    // LOGIN_FAIL,
    // LOGOUT_SUCCESS,
    // REGISTER_SUCCESS,
    // REGISTER_FAIL
}
from './types';


//Check token and load user


export const loadUser = () => (dispatch, getState) => {

    //User Loading
    dispatch({type: USER_LOADING}); //tell authReducer to use User_Loading

    axios.get('/api/auth/user', tokenConfig(getState))
        .then( response =>{
            dispatch({
                type: USER_LOADED,
                payload: response.data
            });
        })
        .catch(error => {
            dispatch(returnErrors(error.response.data, error.response.status));
            dispatch({
                type: AUTH_ERROR
            })
        })
}

//Setup Config/Headers and token

export const tokenConfig = getState =>{
    
    //Get Token From local storage
    const token = getState().auth.token;
    //Headers
    const config = {
        headers: {
            "Content-type" : "application/json"
        }
    }
    //If token, add to headers
    if( token ){
        config.headers['x-auth-token'] = token;
    }

    return config;
}

