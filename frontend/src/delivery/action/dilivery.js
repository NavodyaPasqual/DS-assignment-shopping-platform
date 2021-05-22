const API = require('../api/index');

export const createDelivery =(delivery) => async(dispatch) => {
    try{
        const {data} = await  API.insertDeliveryData(delivery);
        dispatch({type:"CREATE",payload:data});
        console.log(delivery);
    }catch (e) {
        console.log(e);
    }
}