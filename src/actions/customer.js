import * as CONSTANTS from './constants';
import * as API from '../api';

// ADD -----------------------------------------
export function customerAdd(props){  
    return async function( dispatch ){
        dispatch(CONSTANTS.serverRequest('customer-add-request'));
        await API.customerAdd(props)
        .then( async res => {
            if(res.errors){
                dispatch(CONSTANTS.serverFail('customer-fail'));
                return;
            }            
            dispatch(CONSTANTS.serverSuccess('customer-add-success'));            
            dispatch({
                type: CONSTANTS.CUSTOMER_ADD,
                customer: res.data.customerAdd,
            });           
        })
        .catch( (error) => {
            dispatch(CONSTANTS.serverFail('customer-fail'))
        })
    }
}

// LOGIN -----------------------------------------
export function customerLogin(props){  
    return async function( dispatch ){
        dispatch(CONSTANTS.serverRequest('login-request'));
        await API.customerLogin(props)
        .then( async res => {
            if(res.errors){
                dispatch(CONSTANTS.serverFail('customer-fail'));
                return;
            }
            dispatch(CONSTANTS.serverSuccess('login-success'))            
            dispatch({
                type: CONSTANTS.CUSTOMER_SET,
                customer: res.data.customerLogin,
            })     
        })
        .catch( (error) => {
            dispatch(CONSTANTS.serverFail('customer-fail'))
        })
    }
}

// FAILS -------------------------------------------
export const customerFails = () => {
    return function (dispatch){
        dispatch(CONSTANTS.serverFail('customer-fail'));
    }
}

// When redux status is cleared it will resolve the promise.
export const serverClear = () => (dispatch) => {
    return new Promise((resolve, reject)=>{
        dispatch(CONSTANTS.SERVER_ACTIONS.clear);
        resolve();
    })
}