// LOGIN ------------------------------------------
export const LOGIN_REQUESTED = "LOGIN_REQUESTED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

// CUSTOMER ----------------------------------------
export const CUSTOMER_SET = "CUSTOMER_SET";
export const CUSTOMER_ADD = "CUSTOMER_ADD";
export const CUSTOMER_LOGOUT = "CUSTOMER_LOGOUT";

// AREA ----------------------------------------
export const AREAS_SET = "AREAS_SET";
export const AREA_ADD = "AREA_ADD";

//SERVER ---------------------------------------
export const SERVER_REQUEST = 'SERVER_REQUEST';
export const SERVER_FAIL = 'SERVER_FAIL';
export const SERVER_SUCCESS = 'SERVER_SUCCESS';
export const SERVER_CLEAR = 'SERVER_CLEAR';

// SYSTEM  --------------------------------------
export const SERVER_ACTIONS = {
    request: { type: SERVER_REQUEST },
    success: { type: SERVER_SUCCESS },
    fail: { type: SERVER_FAIL },
    clear: { type: SERVER_CLEAR }
}

export function serverRequest(msg) {
    return {
        ...SERVER_ACTIONS.request,
        msg
    }
}

export function serverFail(msg) {
    return {
        ...SERVER_ACTIONS.fail,
        msg
    }
}

export function serverSuccess(msg) {
    return {
        ...SERVER_ACTIONS.success,
        msg
    }
}