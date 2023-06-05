import axios from 'axios'
 
export default {
  install: function (vue) {
    // 创建一个axios
    const result = axios.create({
      // 基准地址
      baseURL: 'http://192.168.48.131:10002'
    })
    // 把创建的axios对象添加到vue原型当中，后面可以使用vue.$http获取axios对象
    vue.prototype.$http = result
  }
}