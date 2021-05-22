import react from "react";
import * as api from"../api/index"
import {AUTH} from "../Constants/userConst";

export const singIn =(formData,history)=>async (dispatch)=>{
    try {
        console.log(formData);
        const {data} = await api.signIn(formData);
        dispatch({type:AUTH,data})
        history.push('/');
    }catch (e) {
        console.log(e);
    }
}
export const singUp =(formData,history)=>async (dispatch)=>{
    try {
        const {data} = await api.signUp(formData);
        const user = {
            name:formData.name,
            email:formData.email
        };
        localStorage.setItem('UserProfile',user);
        console.log(formData+"data");
        dispatch({type:AUTH,data})

        history.push('/');
    }catch (e) {
        console.log(e);
    }
}