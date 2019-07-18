import Vue from 'vue'
import Router from 'vue-router'
import './assets/css/global.css'
import Login from './components/login.vue'
import Home from './components/home.vue'
import Welcome from './components/welcome.vue'
import Users from './components/user/users.vue'
import Right from './components/power/rights.vue'
import Roles from './components/power/roles.vue'
Vue.use(Router)

const router =  new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/home', 
    component: Home, 
    redirect:'/welcome', 
    children: [
      { path: '/welcome', component: Welcome },
      { path: '/users', component: Users },
      { path: '/rights', component: Right },
      { path: '/roles', component: Roles },
    ] },
  ]
})
router.beforeEach((to, from, next) => {
  if(to.path === '/login') return next();
  const tokenStr = window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next()
})
export default router