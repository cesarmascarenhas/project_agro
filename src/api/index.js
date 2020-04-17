import * as GraphQL from './graphql';

const server = 'http://localhost:2526';
//const server = 'http://174.138.58.197:2526';
const endpoint = server+'/graphql';
const uploadpoint = server+'/upload';
const method = 'POST';
const headers = {
    "Content-Type": "application/graphql"
}

// CUSTOMER =====================================

// LOGIN ----------------------------------------
export const customerLogin = async (props) => {
    return await fetch(endpoint, {
            method,
            headers,
            body: GraphQL.customerLogin(props)
        })
        .then(res => {
            if(res.status === 500){
                return res.json().then(
                    res => res
                )
            } else {
                return res.json()
            }
        })
}

// REGISTER ------------------------------------
export const customerAdd = async (props) => {
    return await fetch(endpoint, {
            method,
            headers,
            body: GraphQL.customerAdd(props)
        })
        .then(res => {
            if(res.status === 500){
                return res.json().then(
                    res => res
                )
            } else {
                return res.json()
            }
        })
}

// COSTUMER --------------------------------------
export const customer = async (props) => {
    return await fetch(endpoint, {
            method,
            headers,
            body: GraphQL.customer(props)
        })
        .then(res => {
            if(res.status === 500){
                return res.json().then(
                    res => res
                )
            } else {
                return res.json()
            }
        })
}

// AREA =====================================
export const areaAdd = async (props) => {
    return await fetch(endpoint, {
            method,
            headers,
            body: GraphQL.areaAdd(props)
        })
        .then(res => {
            if(res.status === 500){
                return res.json().then(
                    res => res
                )
            } else {
                return res.json()
            }
        })
}


export async function uploadImageAsync(uri) {

    if (!uri) {
        return;
    }

    let uriParts = uri.split('.');
    let fileType = uriParts[uriParts.length - 1];

    let formData = new FormData();
    formData.append('map', {
        uri,
        name: `map.${fileType}`,
        type: `image/${fileType}`
    })

    return fetch(uploadpoint, {
        method,
        body: formData,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
        }
    }).then(
        res => res.json()
    );
}