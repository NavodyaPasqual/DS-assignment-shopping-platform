import {AUTH,LOG_OUT} from '../Constants/userConst';

export const authReducer=(state={authData:null},action)=>{

    switch (state.type) {
        case "AUTH":
            console.log(state?.data);
            localStorage.setItem('UserProfile',JSON.stringify({...state?.data}));
            return {...state,authData:state?.data};
        case "LOGOUT":
            localStorage.clear();
            return {...state,authData:null};
        default:
            return state;
    }
};


export default authReducer;