import axios from 'axios'
axios.defaults.baseURL = 'http://newedu.hz.taeapp.com/'

export const login = (username, password) => axios.post('api.php', {
  module: 'Users',
  action: 'DoLogin',
  user_name: 'admin',
  user_password: 'admin'
})
