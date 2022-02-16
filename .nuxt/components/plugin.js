import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  BottomNavBar: () => import('../../components/BottomNavBar.vue' /* webpackChunkName: "components/bottom-nav-bar" */).then(c => wrapFunctional(c.default || c)),
  Couple: () => import('../../components/Couple.vue' /* webpackChunkName: "components/couple" */).then(c => wrapFunctional(c.default || c)),
  Event: () => import('../../components/Event.vue' /* webpackChunkName: "components/event" */).then(c => wrapFunctional(c.default || c)),
  Home: () => import('../../components/Home.vue' /* webpackChunkName: "components/home" */).then(c => wrapFunctional(c.default || c)),
  Locations: () => import('../../components/Locations.vue' /* webpackChunkName: "components/locations" */).then(c => wrapFunctional(c.default || c)),
  Wish: () => import('../../components/Wish.vue' /* webpackChunkName: "components/wish" */).then(c => wrapFunctional(c.default || c)),
  Gift: () => import('../../components/gift.vue' /* webpackChunkName: "components/gift" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
