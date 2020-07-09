import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4R_Fx4-SOBCZp28zWlM8a1_Pg-agKwnU_QuqmOkUEc4'
      }
});