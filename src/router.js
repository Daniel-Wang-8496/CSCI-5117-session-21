import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './HomeView.vue'
import TestingView from './TestingView.vue'
import TestIDView from './TestIDView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/testing', component: TestingView },
  { path: '/test/:id', component: TestIDView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
