import { LOGIN_USER, LOGING_USER_IN } from './types';
import axios from 'axios';

//for async calls
export const tryToLogInUser = () => dispatch => {
    
    dispatch(loggingUserInProgress());
    axios
        .get('/api/users')
        .then( res => {
            dispatch({
                type: LOGIN_USER,
                payload: res.data
            })
        }
        )
}

export const loggingUserInProgress = () => {
    return {
        type: LOGING_USER_IN
    }
}


