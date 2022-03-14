import { createApp } from 'vue'
import store from "./store"
import router from "./router"
import App from './App.vue'
import './index.css'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


const app = createApp(App)
    .use(store)
    .use(router)
    .use(VueSweetalert2)
    .mount('#app')
