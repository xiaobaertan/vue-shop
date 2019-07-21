import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/login.vue'
import Home from './components/home.vue'
import Welcome from './components/welcome.vue'
import Users from './components/user/users.vue'
import Rights from './components/power/rights.vue'
import Roles from './components/power/roles.vue'
import Categories from './components/goods/categories.vue'
import Params from './components/goods/params.vue'
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
      { path: '/rights', component: Rights },
      { path: '/roles', component: Roles },
      { path: '/categories', component: Categories },
      { path: '/params', component: Params },
    ] },
  ]
})
// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数 表示放行
  // next() 放行 next('/login') 强制跳转
  if(to.path === '/login') return next();
  // 获取 token 
  const tokenStr = window.sessionStorage.getItem("token")
  if(!tokenStr) return next('/login')
  next()
})
export default router
