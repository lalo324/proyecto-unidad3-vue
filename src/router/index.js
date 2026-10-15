
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/condicionales',
      name: 'condicionales',
      component: () => import('../views/CondicionalesView.vue'),
    },
    {
      path: '/mostrar',
      name: 'mostrar',
      component: () => import('../views/MostrarView.vue'),
    },
    {
      path: '/listas',
      name: 'listas',
      component: () => import('../views/ListasView.vue'),
    },
    {
      path: '/claves',
      name: 'claves',
      component: () => import('../views/ClavesView.vue'),
    },
  ],
})

export default router
