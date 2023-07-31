import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginRegisterView from '../views/LoginRegisterView.vue';
import LoginForm from '../components/login-register-forms/LoginForm.vue';
import RegisterForm from '../components/login-register-forms/RegistrationForm.vue';
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
      path: '/login',
      name: 'LoginRegisterView',
      component: LoginRegisterView,
      children: [
        {
          path: 'login',
          component: LoginForm,
        },
        {
          path: 'register',
          component: RegisterForm,
        },
      ],
    },
    {
      path: '/math-facts',
      name: 'MathFactsView',
      component: MathFactsView,
      children: [
        {
          path: '',
          component: GameConfig,
        },
        {
          path: 'play',
          name: 'GamePlay',
          component: GamePlay,
          props: (route) => ({ 
            operation: route.query.operation, 
            maxNumber: route.query.maxNumber 
          }),
        },
      ],
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
      path: '/anagram-hunt',
      name: 'AnagramHuntView',
      component: AnagramHuntView
    }
  ];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});