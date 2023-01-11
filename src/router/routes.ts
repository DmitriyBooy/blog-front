import { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/Main.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'main',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

export default routes