import axios from 'axios';
const api = axios.create({
    
//   baseURL: 'http://192.168.1.192:8888/api',
//   baseURL: 'https://4733-122-169-115-137.ngrok-free.app/api',
  baseURL: 'https://shopify-backend-omega.vercel.app/api',
});

export default api;
