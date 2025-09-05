const { default: axios } = require('axios');

const axiosPublic = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
export default axiosPublic;
