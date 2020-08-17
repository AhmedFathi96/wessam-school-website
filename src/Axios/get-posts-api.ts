import axios from 'axios';
import * as Requests from './urls'
export const getBlogPostsApi = () =>{
    return axios.get(Requests.getPostsURL);
}