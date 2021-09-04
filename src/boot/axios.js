import { boot } from 'quasar/wrappers'
import { LocalStorage } from 'quasar';
import axios from 'axios'

const api = axios.create({ baseURL: 'https://api.example.com' });
const token = LocalStorage.getItem('token');

api.interceptors.request.use(config => {
  if (token) config.headers.Authorization = token
  return config;
}, (error) => {
  console.error(error)
});
console.log("olá")

export default boot(({ app }) => {
  app.config.globalProperties.$axios = api
})

export { api }
