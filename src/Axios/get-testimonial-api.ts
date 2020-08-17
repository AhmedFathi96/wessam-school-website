import axios from 'axios';
import * as Requests from './urls'
export const getTestimonialsApi = () =>{
    return axios.get(Requests.getTestimonialsURL);
}