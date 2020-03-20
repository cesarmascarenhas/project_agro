import * as CONSTANTS from '../actions/constants';

export const customer = ( customer = null, action ) => {
    switch(action.type){
        case CONSTANTS.CUSTOMER_ADD:
            return action.customer;
        case CONSTANTS.CUSTOMER_SET:
            return action.customer;
        case CONSTANTS.CUSTOMER_LOGOUT:
            return { login: false, error: null };
        default:
            return customer;
    }
}

export default customer;