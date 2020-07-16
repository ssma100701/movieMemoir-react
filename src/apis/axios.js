import axios from 'axios';

export default axios.create({
  baseURL: 'http://3.25.117.88//api',
  headers: {
    crossDomain: true,
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});
