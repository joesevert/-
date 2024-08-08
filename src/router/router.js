import { vueRouters } from '../services/global'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/home.vue')
  },
  ...vueRouters()
]

