import {createApp} from 'vue'
import App from './App.vue'
import axios from "axios";
import VueAxios from "vue-axios";
import {store} from './store'
import router from './router'

createApp(App)
    .use(store)
    .use(router)
    .use(VueAxios, axios)
    .mount('#app')
