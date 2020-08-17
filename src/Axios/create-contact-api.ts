import axios from 'axios';
import * as Requests from './urls'
export const createCreateContactApi = (data:any) =>{
    return axios.post(Requests.createContactURL,data);
}