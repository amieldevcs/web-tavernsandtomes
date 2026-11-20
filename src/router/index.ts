import { createRouter, createWebHistory } from 'vue-router'
import CampaignView from '../views/CampaignView.vue'
import DashboardHome from '../views/DashboardHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DashboardHome,
    },
    {
      path: '/campaign',
      name: 'campaign',
      component: CampaignView,
    },
    {
      path: '/game-sessions',
      name: 'game-sessions',
      component: DashboardHome,
    },
    {
      path: '/character-sheets',
      name: 'character-sheets',
      component: DashboardHome,
    },
    {
      path: '/spells',
      name: 'spells',
      component: DashboardHome,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => {},
    },
  ],
})

export default router
