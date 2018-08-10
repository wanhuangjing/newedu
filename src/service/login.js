import axios from 'axios'
axios.defaults.baseURL = 'http://newedu.hz.taeapp.com/'

export const login = (username, password) => axios.post('api.php', {
  module: 'Users',
  action: 'DoLogin',
  user_name: username,
  user_password: password
})

export const getCompanyInfo = () => axios.get('getCompanyInfo.php')
