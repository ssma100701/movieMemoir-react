import axios from 'axios';

export default axios.create({
  baseURL: 'http://13.211.153.191/api',
  headers: {
    crossDomain: true,
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
});
