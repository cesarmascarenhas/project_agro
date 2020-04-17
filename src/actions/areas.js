import * as CONSTANTS from './constants';
import * as API from '../api';

// FETCH -----------------------------------------
export function areas(props){  
    return async function( dispatch ){
        dispatch(CONSTANTS.serverRequest('areas-request'));
        await API.customer(props)
        .then( async res => {
            if(res.errors){
                dispatch(CONSTANTS.serverFail('areas-fail'));
                return;
            }            
            dispatch(CONSTANTS.serverSuccess('areas-success'));            
            dispatch({
                type: CONSTANTS.AREAS_SET,
                data: res.data.customer.area,
            });           
        })
        .catch( (error) => {
            dispatch(CONSTANTS.serverFail('areas-fail'))
        })
    }
}

// ADD -----------------------------------------
export function areaAdd(props, areas, image){  
    return async function( dispatch ){
        dispatch(CONSTANTS.serverRequest('areaAdd-request'));
        const upload = await API.uploadImageAsync(image);
        await API.areaAdd({...props, imageFile:upload.data.path})
        .then( async res => {
            if(res.errors){
                dispatch(CONSTANTS.serverFail('areaAdd-fail'));
                return;
            }            
            dispatch(CONSTANTS.serverSuccess('areaAdd-success'));            
            dispatch({
                type: CONSTANTS.AREA_ADD,
                data: areas.data,
                area: {...res.data.areaAdd, imageFile: image}
            });           
        })
        .catch( (error) => {
            dispatch(CONSTANTS.serverFail('areaAdd-fail'))
        })
    }
}