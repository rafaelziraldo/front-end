import axios from 'axios';
const baseUrl = process.env.REACT_APP_API_URL;
const token = localStorage.getItem('token') || '';
let config = {
  headers: {
    'Content-type': 'application/json',
    'x-token': token
  }
}
let configGet = {
  headers: {
    
    'x-token': token
  }
}
export const post=(data,url)=>{
   return axios.post(baseUrl+url, data,config )
      
}
export const get=(url)=>{
  return axios.get(baseUrl+url,configGet)
      
}
export const put=(data,url)=>{
  return axios.put(baseUrl+url,data,config)
      
}
export const eliminar=(url)=>{
  return axios.delete(baseUrl+url,config)
      
}