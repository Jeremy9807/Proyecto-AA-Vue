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
      path: '/lista-tareas',
      name: 'ListaTareas',
      component: () => import('../modules/listaTareas/components/listaTareas.vue'),
     },
     {
      path: '/contador',
      name: 'Contador',
      component: () => import('../modules/contador/components/ContadorCmp.vue'),
     },
     {
      path: '/registro',
      name: 'Registro',
      component: () => import('../modules/registro/views/RegistroView.vue'),
     },
     {
      path: '/propiedades-computadas',
      name: 'PropiedadesComputadas',
      component: () => import('../modules/calcular/views/CalcularView.vue'),
     }
  ],
})

export default router
