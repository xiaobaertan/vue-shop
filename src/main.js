import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入字体图标
import './assets/fonts/iconfont.css'
import './assets/css/global.css'
import './plugins/element.js'
import TreeTable from 'vue-table-with-tree-grid'
import axios from 'axios'
import moment from 'moment'
// 导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1'
// 导入富文本编辑器对应的样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 最后必须返回 config
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.component('tree-table', TreeTable)
// 将富文本编辑器注册为全局可用的组件
Vue.use(VueQuillEditor)
// Vue.filter('dateFormat', function(timeVal) {
//   // 给定时间的时间对象
//   const dt = new Date(timeVal)
//   const y = dt.getFullYear()
//   const m = (dt.getMonth() + 1 + '').padStart(2, '0')
//   const d = (dt.getDate()+'').padStart(2,'0')
//   const h = (dt.getHours()+'').padStart(2,'0')
//   const mm = (dt.getMinutes()+'').padStart(2,'0')
//   const ss = (dt.getSeconds()+'').padStart(2,'0')
//   return `${y}-${m}-${d} ${h}:${mm}:${ss}`
// })
 Vue.filter('dateFormat', function(timeVal) {
   return moment(Number(timeVal+'000')).format('YYYY-MM-DD h:mm:ss')
 })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
