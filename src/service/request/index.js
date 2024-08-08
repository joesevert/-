import axios from "axios";
import {BASE_URL, TIME_OUT} from './config'

class myRequest {
  constructor(baseURL, timeOut=10000) {
    this.instance = axios.create({
      baseURL,
      timeOut
    })
  }
  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        // console.log(res)
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
    
  }
  get(config) {
    return this.request({...config, method: 'get'})
  }
  post(config) {
    return  this.request({...config, method: 'post'})
  }
}

// console.log(new myRequest(BASE_URL, TIME_OUT))
export default new myRequest(BASE_URL, TIME_OUT)