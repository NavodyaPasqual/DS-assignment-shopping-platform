import react from "react";
import * as api from"../api/index"
import {AUTH} from "../Constants/userConst";
import authReducer from "../reducers/auth";

export const singIn =(formData,history)=>async (dispatch)=>{
    try {
        console.log(formData);
        const {data} = await api.signIn(formData);
        authReducer({type:'AUTH',data:data});
        dispatch({type:AUTH,data})
        history.push('/');
    }catch (e) {
        console.log(e);
    }
}
export const singUp =(formData,history)=>async (dispatch)=>{
    try {
        const {data} = await api.signUp(formData);

        console.log(formData+"data");
        dispatch({type:AUTH,data})
        authReducer({type:'AUTH',data:data});
        history.push('/');
    }catch (e) {
        console.log(e);
    }
}