import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Vant from '../views/Vant.vue'
import Swiper from '../views/Swpier.vue'
import Rem from '../views/Rem.vue'
import Watch from '../views/Watch.vue'
import Father from '../views/Father.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/father',
    component: Father
  },
  {
    path: '/watch',
    component: Watch
  },
  {
    path: '/rem',
    beforeEnter:(to,from,next)=>{
      console.log('路由级别的守卫')
      console.log(to)
      console.log(from)
      // if(localStorage.getItem('token')){
      //   next()
      // }else{
      //   next("/login")
      // }
      next()
    },
    component: Rem
  },
  {
    path: '/swiper',
    component: Swiper
  },
  {
    path: '/vant',
    component: Vant
  },
  {
    path: '/about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next)=>{
  console.log('全局路由守卫')
  console.log(to)
  console.log(from)
  next()
})
router.afterEach((to,from)=>{
  console.log('全局路由守卫after')
  console.log(to)
  console.log(from)
})

export default router
