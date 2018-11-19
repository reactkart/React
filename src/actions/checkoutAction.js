import checkoutApi from '../api/checkoutApi';
import * as TYPES from '../actions/actionTypes';

export function loadCheckoutActionSuccess(apiCheckout){
    return {type: TYPES.LOAD_CHECKOUT_SUCCESS, apiCheckout};
}

export function saveCheckoutDetailsSuccess(checkout){
    return {type: TYPES.SAVE_CHECKOUT_SUCCESS, checkout};
}

export function loadCheckout(){  
    return function(dispatch){        
        return checkoutApi.getCheckoutInfo().then(apiCheckout => {
            dispatch(loadCheckoutActionSuccess(apiCheckout));
        }).catch(error => {
            throw(error);
        });
    };
}

export function addToCheckout(index, product){  
    return {type: TYPES.ADD_TO_CHECKOUT_SUCCESS, product };
}


//export const addToCheckout = product => ({type: TYPES.ADD_TO_CHECKOUT_SUCCESS, payload: product});

export function saveCheckout(checkout){
    return function(dispatch){
        return checkoutApi.saveCheckoutInfo(checkout).then(checkout => {
               return dispatch(saveCheckoutDetailsSuccess(checkout)); 
        }).catch(error =>{
            throw(error);
        });
    }
}