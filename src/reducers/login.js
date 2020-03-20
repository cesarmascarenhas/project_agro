import * as CONSTANTS from '../actions/constants';

export const login = (login = { props: null }, action) => {
    switch (action.type){
        case CONSTANTS.LOGIN :
            return {
                props: action.props,
            }
        default:
            return login;
    }
}
export default login;