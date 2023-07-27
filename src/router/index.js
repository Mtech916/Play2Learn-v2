import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import MathFactsView from '../views/MathFactsView.vue';
import AnagramHuntView from '../views/AnagramHuntView.vue';
import GameConfig from '../components/math-facts-practice/GameConfig.vue';
import GamePlay from '../components/math-facts-practice/GamePlay.vue';

const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/math-facts',
      name: 'MathFactsView',
      component: MathFactsView
    },
    {
      path: '/about',
      name: 'AboutView',
      component: AboutView
    },
    {
      path: '/game-config',
      name: 'GameConfig',
      component: GameConfig
    },
    {
      path: '/play',
      name: 'GamePlay',
      component: GamePlay,
      props: {
        operation: true,
        maxNumber: true
      }
    },
    {
      path: '/anagram-hunt',
      name: 'AnagramHuntView',
      component: AnagramHuntView
    }
  ];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});