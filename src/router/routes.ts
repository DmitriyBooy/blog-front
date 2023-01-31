import { RouteRecordRaw } from 'vue-router'
import MainLayout from '../views/Layouts/MainLayout.vue'
import FullPageLayout from '../views/Layouts/Fullpage.vue'

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
      },
    ],
    component: MainLayout,
  },
  {
    path: '',
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/Pages/Profile.vue')
      }
    ],
    component: FullPageLayout
  }
]

export default routes