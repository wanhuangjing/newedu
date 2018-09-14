import axios from 'axios'
import { Message } from 'element-ui'

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://eduapi.whj.space/'
axios.interceptors.response.use((res) => {
  const response = res.data
  if (response.msg) {
    if (response.code === 0) {
      Message.success(response.msg)
    } else {
      Message.error(response.msg)
    }
  }
  return response
}, (err) => {
  if (err && err.response) {
    switch (err.response.status) {
      case 401:
        Message.error('未授权，请登录')
        window.location.href = '/#/auth/login'
        break
      case 404:
        Message.error('接口请求异常: ' + err.response.config.url + ', 请重试')
        break
      default:
        Message.error('Oops, 出错啦')
    }
  }
  return Promise.reject(err)
})
export const login = (username, password) => axios.post('api.php', {
  module: 'Users',
  action: 'DoLogin',
  user_name: username,
  user_password: password
})

export const getCompanyInfo = () => axios.get('getCompanyInfo.php')
