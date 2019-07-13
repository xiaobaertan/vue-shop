import Vue from 'vue'
import Router from 'vue-router'
import './assets/css/global.css'
import Login from './components/login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login }
  ]
})
