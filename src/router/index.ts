import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../views/CategoryView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router