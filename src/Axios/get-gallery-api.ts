import axios from 'axios';
import * as Requests from './urls'
export const getGalleryApi = () =>{
    return axios.get(Requests.getGalleryURL);
}