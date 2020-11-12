import axios from 'axios';

// make easy request without URL copypasting.
// make post get delet put requests.
// send jwt easy.

const callApi = async(method, path, data, jwt) =>{
    const headers = {
        Authorization: jwt,
        'Content-Type':'application/json'
    };
    const baseURL = 'https://4ffa7735fa03.ngrok.io/api/v1'
    const fullUrl = `${baseURL}${path}`;
    if(method==='get'||method==='delete'){
        return axios[method](fullUrl, {headers})
    }else{
        return axios[method](fullUrl, data, {headers})
    }
}

export default {
    createAccount:form => callApi("post", '/users/', form),
    login:form => callApi('post', '/users/login/', form),
    rooms:(page=1) => callApi('get',`/rooms/?page=${page}`),
    favs: (id) => callApi('get', `/users/${id}/favs/`)
}