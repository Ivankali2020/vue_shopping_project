import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/js/bootstrap.bundle'
import '@/assets/style/main.scss'
import 'jquery/dist/jquery.min'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css/animate.min.css'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const options = {
    confirmButtonColor: '#41b882',
    cancelButtonColor: '#ff7674',
    background:'#2f2f2f'
};

createApp(App).use(store).use(router).use(VueSweetalert2,options).mount('#app')

