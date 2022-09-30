import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/Login.vue';
import Dashboard from '@/views/Dashboard.vue';
import { isLoggedIn } from '@/services/authServices';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth && !(await isLoggedIn())) {
    next('/');
    return;
  }

  if (to.name === 'Login' && (await isLoggedIn())) {
    next('/dashboard');
    return;
  }

  document.title = to.name;
  next();
});

export default router;
