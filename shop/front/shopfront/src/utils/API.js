import axios from 'axios';

// Set up axios
const dev_envs = ['localhost', 'dev', '127.0.0.1'];
const env = (dev_envs.find(a => window.location.href.includes(a))) ? 'dev': 'production';
const API_BASE_URL = env === 'dev' ? 'http://localhost:4000' : 'http://localhost:4000';

const service = axios.create({
  baseURL: API_BASE_URL,
  timeout: 12000
});

export default service;