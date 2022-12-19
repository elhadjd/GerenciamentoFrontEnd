import  axios, { AxiosHeaders }  from "axios";
import { Navigate } from "react-router-dom";
window.axios = axios
axios.defaults.withCredentials = true;

export const Api = axios.create({
    baseURL: `http://18.231.173.211:1981/`,
    headers: {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}` 
    }
});

export const Logar = (async(form)=>{
    return await Api.post('auth/login')
})

export const registerClient = (async(client)=>{
    return await Api.post('/registerClient',client)
})

export const GetClients = async()=>{
    return await Api.get('/GetClients')
}