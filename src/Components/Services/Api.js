import axios from 'axios';

export const getBaseUrl=()=>{
    return 'http://localhost:3001' //Dev
}

export const setToken=()=>{
    sessionStorage.setItem('login_token', token);
}
export const getToken=()=>{
    sessionStorage.getItem('login_token');
}

export const getApi=(requestMethods, useToken=false)=>{
    let url = getBaseUrl() + requestMethods.url;

    //If url has some parameters (path params)
    if(requestMethods.pathParams){
        url += params.pathParams;
    };
    let headers = {
        'Accept' : 'applications/json'
    };
    //If using token
    if(useToken){
        headers.Authentiation = `Bearer ` + getToken();
    };
    //If url ahs some query params like id (query params)
    if(requestMethods.queryParams){
        headers.filter = JSON.stringify(requestMethods.queryParams)
    };
    return axios({
        url: url,
        method: 'get',
        headers: headers
    });
}