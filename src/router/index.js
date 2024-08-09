import { createRouter, createWebHashHistory } from "vue-router";
import { vueRouters } from '../service/global'
import Home from '@/views/home/home.vue'
import favor from '@/views/favor/favor.vue'
import order from '@/views/order/order.vue'
import message from "@/views/message/message.vue";
import city from "@/views/city/city.vue";
import detail from "@/views/detail/detail.vue";
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
      // component: () => import('@/views/favor/favor.vue')
      component: favor
    },
    {
      path: '/order',
      // component: () => import('@/views/order/order.vue')
      component: order
    },
    {
      path: '/message',
      // component: () => import('@/views/message/message.vue'),
      component: message,
      meta:{
        hiddenBar: true
      }
    },
    {
      path: '/city',
      // component: () => import('@/views/city/city.vue'),
      component: city,
      meta:{
        hiddenBar: true
      }
    },
    {
      path: '/detail/:id',
      // component: () => import('@/views/detail/detail.vue'),
      component: detail,
      meta: {
        hiddenBar: true
      }
    }
    // ...vueRouters()
  ]
})

export default router