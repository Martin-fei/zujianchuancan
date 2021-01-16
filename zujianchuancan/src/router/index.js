import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Vant from '../views/Vant.vue'
import Swiper from '../views/Swpier.vue'
import Rem from '../views/Rem.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/rem',
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

export default router
