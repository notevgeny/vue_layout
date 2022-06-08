import Vue from 'vue'
import VueRouter from 'vue-router'

import HeroView from '../views/HeroView'
import LayoutView from '../views/LayoutView'

Vue.use(VueRouter)

 
const routes = [
  { path: '/', component: HeroView },
  { name: 'layouts', path: '/:id', component: LayoutView}
]

const router = new VueRouter({
  mode: 'history',
  routes
}) 


export default router