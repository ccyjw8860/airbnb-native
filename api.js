import axios from 'axios';

// make easy request without URL copypasting.
// make post get delet put requests.
// send jwt easy.

const callApi = async(method, path, data, jwt) =>{
    const headers = {
        Authorization: jwt,
        'Content-Type':'application/json'
    };
    const baseURL = 'http://127.0.0.1:8000/api/v1'
    const fullUrl = `${baseURL}${path}`;
    if(method==='get'||method==='delete'){
        return axios[method](fullUrl, {headers})
    }else{
        return axios[method](fullUrl, data, {headers})
    }
}

export const createAccount = form => callApi("post", '/users/', form);