import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Cocktail from '../pages/Cocktail.vue'
import CocktailsRandom from '../pages/CocktailsRandom.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cocktails/:rid',
      name: 'cocktails',
      component: Cocktail
    },
    {
      path: '/random',
      name: 'random',
      component: CocktailsRandom
    },
  ]
})

export default router
