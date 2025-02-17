import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
     {
       path: '/header',
       name: 'header',
       component: () => import('../components/Header.vue'),
     },
     {
      path: '/lista-tareas',
      name: 'ListaTareas',
      component: () => import('../components/listaTareas.vue'),
     }
  ],
})

export default router
