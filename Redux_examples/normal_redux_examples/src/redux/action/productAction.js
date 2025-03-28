import { actionTypes } from "../constants/action-types";
export const SetProducts=()=>{
    return{
        type:actionTypes.SET_PRODUCTS,
        payload:products,

    }
}


export const ADD_TO_CART=(product)=>{
    return{
        type:actionTypes.ADD_TO_CART,
        payload:product,
    }
}

export const REMOVE_FROM_CART=(product)=>{
    return{
        type:actionTypes.REMOVE_FROM_CART,
        payload:product,
    }
}

export const DECREMENT_QUANTITY=(product)=>{
    return{
        type:actionTypes.DECREMENT_QUANTITY,
        payload:product,
    }
}