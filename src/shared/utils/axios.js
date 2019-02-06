import axios from 'axios';
import {BASE_URL} from '../constant/base_url';

const instance = axios.create({
    BASE_URL
});

export default instance;