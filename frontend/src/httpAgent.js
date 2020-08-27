import axios from 'axios'
import router from './router/index'
import {Message} from 'element-ui'
import get from 'lodash/get'

const http = axios.create()

http.interceptors.response.use(
  res => {
    return res
  },
  error => {
    if (error.response && error.response.status === 401) {
      const app = router.app
    }
    return Promise.reject(error)
  }
)

export default http
