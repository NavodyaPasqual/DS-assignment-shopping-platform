import {AUTH,LOG_OUT} from '../Constants/userConst';

const authReducer=(state ={authData:null},action)=>{
    switch (action.type) {
        case AUTH:
            console.log(action?.data);
            localStorage.setItem('UserProfile',JSON.stringify({...action?.data}))

            return {...state,authData:action?.data};
            
        default:
            return state;
    }
};

export default authReducer;