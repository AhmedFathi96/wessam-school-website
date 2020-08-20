import axios from 'axios';
import * as Requests from './urls'
export const getInfoApi = () =>{
    return axios.get(Requests.getInfoURL);
}