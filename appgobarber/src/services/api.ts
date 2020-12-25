import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

// iniciar backend e mudar 'localhost' para ip da máquina

export default api;
