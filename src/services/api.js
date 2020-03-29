import axios from 'axios';

//npm install axios
//Connect to Rest API
const api = axios.create({ baseURL: 'https://rocketseat-node.herokuapp.com/api' });

export default api;