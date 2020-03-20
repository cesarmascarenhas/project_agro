import * as CONSTANTS from '../actions/constants';

export const server = ( server = { status: null, msg: null }, action) => {
    switch (action.type){
        case CONSTANTS.SERVER_REQUEST :
            return { status: 'request', msg: action.msg };
        case CONSTANTS.SERVER_FAIL :
            return { status: 'failed', msg: action.msg };
        case CONSTANTS.SERVER_SUCCESS :
            return { status: 'success', msg: action.msg };
        case CONSTANTS.SERVER_CLEAR :
            return { status: null, msg: null };
        default:
            return server;
    }
}
export default server;