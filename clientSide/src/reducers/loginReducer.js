
import { LOGIN_USER, LOGING_USER_IN  } from '../actions/types';

const initialState = {
    loggedInUser: 0,
    loggingInUser: false
}


export default function(state = initialState, actionPerformed ){
    switch( actionPerformed.type ){
        case LOGIN_USER:
            // console.log("From Reducer: ");
            // console.log(actionPerformed.payload);
            // state.loggedInUser = actionPerformed.payload;
            // console.log( state.loggedInUser);
            return{
                ...state,
                loggedInUser: actionPerformed.payload,
                loggingInUser: false
            }
        case LOGING_USER_IN:
            return{
                ...state,
                loggingInUser: true
            }
        default: return state
    }
}








