import { createRouter, createWebHashHistory } from 'vue-router'
import NewArrivals from '../views/NewArrivals.vue';
import BestSeller from '../views/BestSeller.vue';
import Mostview from '../views/Mostview.vue';

export const routes = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'new_arrivals',
      component: NewArrivals,
      props:true
    },
    {
        path: '/bestseller',
        name: 'best_seller',
        component: BestSeller,
        props:true

      },
      {
        path: '/mostview',
        name: 'most_view',
        component: Mostview,
        props:true

      }
  ]
})