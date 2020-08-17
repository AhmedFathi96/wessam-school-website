import axios from 'axios';
import * as Requests from './urls'
export const getCoursesApi = () =>{
    return axios.get(Requests.createCoursesURL);
}