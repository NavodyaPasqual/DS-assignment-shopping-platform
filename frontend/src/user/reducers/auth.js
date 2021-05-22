import {AUTH,LOG_OUT} from '../Constants/userConst';

/**
 *sign in and sign out
 * @param state
 * @param action
 * @returns {{authData: null}|{authData: *}}
 */

export const authReducer=(state={authData:null},action)=>{

    switch (state.type) {
        //if case is login
        case "AUTH":
            console.log(state?.data);

            //save data to local storage
            localStorage.setItem('UserProfile',JSON.stringify({...state?.data}));
            return {...state,authData:state?.data};
            //if case log out
        case "LOGOUT":
            localStorage.clear();
            return {...state,authData:null};
        default:
            return state;
    }
};


export default authReducer;