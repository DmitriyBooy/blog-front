import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import BButton from './components/BButton.vue'
import { createPinia } from 'pinia'

import './assets/css/main.scss'
import './assets/css/tailwind.css'

import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

const pinia = createPinia()

const app = createApp(App)
    .use(pinia)
    .use(router)
    .use(antd)
    .component('b-button', BButton)
    .mount('#app')
