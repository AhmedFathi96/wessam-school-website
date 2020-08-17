import axios from 'axios';
import * as Requests from './urls'
export const getSlidersApi = () =>{
    return axios.get(Requests.getSlidersURL);
}