import axios from 'axios';

const jsonapi = axios.create({
  baseURL: 'https://localhost:3333/'
});

export default jsonapi;
