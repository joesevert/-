import { createRouter, createWebHashHistory } from "vue-router";
import { vueRouters } from '../service/global'
import Home from '@/views/home/home.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      // component: () => import('@/views/home/home.vue')
      component: Home
    },
    {
      path: '/favor',
      component: () => import('@/views/favor/favor.vue')
    },
    {
      path: '/order',
      component: () => import('@/views/order/order.vue')
    },
    {
      path: '/message',
      component: () => import('@/views/message/message.vue'),
      meta:{
        hiddenBar: true
      }
    },
    {
      path: '/city',
      component: () => import('@/views/city/city.vue'),
      meta:{
        hiddenBar: true
      }
    },
    {
      path: '/detail/:id',
      component: () => import('@/views/detail/detail.vue'),
      meta: {
        hiddenBar: true
      }
    }
    // ...vueRouters()
  ]
})

export default router