import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/vue-app/:page*',
      name: 'vue-app',
      component: () => import('../views/vue-app.vue'),
    },
    {
      path: '/react-app/:page*',
      name: 'react-app',
      component: () => import('../views/react-app.vue'),
    },
  ],
});

export default router;
