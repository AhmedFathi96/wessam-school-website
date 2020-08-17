import axios from 'axios';
import * as Requests from './urls'
export const getAboutApi = () =>{
    return axios.get(Requests.getAboutURL);
}