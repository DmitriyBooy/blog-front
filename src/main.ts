import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import BButton from './components/BButton.vue'

import './assets/css/main.scss'
import './assets/css/tailwind.css'

import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)
    .use(store)
    .use(router)
    .use(antd)
    .component('b-button', BButton)
    .mount('#app')
