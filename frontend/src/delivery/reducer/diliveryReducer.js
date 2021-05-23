import {CREATE} from '../Constants/diliveryConst';

export const deliveryReducer=(delivery=[],action)=>{
    switch (action.type) {
        case CREATE:
            console.log("data :" + delivery.data)
            return [...action,action.payload];
    }
}