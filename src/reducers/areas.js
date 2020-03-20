import * as CONSTANTS from '../actions/constants';

export const areas = ( areas = { data:[], page: 0}, action ) => {
    switch(action.type){
        case CONSTANTS.AREAS_SET:
            return {
                data: action.data,
                page: 0
            };
        case CONSTANTS.AREA_ADD:
            return {
                data: [...action.data, action.area],
                page: 0
            };
        default:
            return areas;
    }
}

export default areas;