import axios from 'axios';
import * as Requests from './urls'
export const createStudentApi = (data:any) =>{
    return axios.post(Requests.createStudentURL,data);
}