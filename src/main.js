import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/_base.css';


import { createApp } from 'vue'
import App from './App.vue'
import { useVuelidate } from '@vuelidate/core'; 

import { router } from './router/index';



const app = createApp(App);
app.use(useVuelidate);
app.use(router);
app.mount('#app');
