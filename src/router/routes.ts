import { RouteRecordRaw } from 'vue-router'
import MainLayout from '@/views/Layouts/MainLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    children: [
      {
        path: '',
        name: 'PostFeed',
        component: () => import('../views/Pages/PostFeed.vue')
      },
      {
        path: '/test',
        name: 'test',
        component: () => import('../views/Pages/AboutView.vue')
      }
    ],
    component: MainLayout,
  },
]

export default routes