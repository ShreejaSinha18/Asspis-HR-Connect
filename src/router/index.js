import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  //page views
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;