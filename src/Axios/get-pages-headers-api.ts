import axios from 'axios';
import * as Requests from './urls'
export const getPagesHeadersApi = () =>{
    return axios.get(Requests.getPagesHeadersURL);
}