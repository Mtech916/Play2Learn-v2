import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/_base.css';


import { createApp } from 'vue'
import App from './App.vue'

// import { createRouter, createWebHashHistory } from 'vue-router';
import { router } from './router/index';
// import GameConfig from './components/math-facts-practice/GameConfig.vue';
// import GamePlay from './components/math-facts-practice/GamePlay.vue';

// const routes = [
//   { path: '/', component: GameConfig },
//   { path: '/play/:operation/:maxNumber', component: GamePlay, props:true },
// ];

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes,
// });

const app = createApp(App);
app.use(router);
app.mount('#app');
