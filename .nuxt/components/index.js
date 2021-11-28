import { wrapFunctional } from './utils'

export { default as BottomNavBar } from '../../components/BottomNavBar.vue'
export { default as Couple } from '../../components/Couple.vue'
export { default as Event } from '../../components/Event.vue'
export { default as Home } from '../../components/Home.vue'
export { default as Locations } from '../../components/Locations.vue'
export { default as Wish } from '../../components/Wish.vue'

export const LazyBottomNavBar = import('../../components/BottomNavBar.vue' /* webpackChunkName: "components/bottom-nav-bar" */).then(c => wrapFunctional(c.default || c))
export const LazyCouple = import('../../components/Couple.vue' /* webpackChunkName: "components/couple" */).then(c => wrapFunctional(c.default || c))
export const LazyEvent = import('../../components/Event.vue' /* webpackChunkName: "components/event" */).then(c => wrapFunctional(c.default || c))
export const LazyHome = import('../../components/Home.vue' /* webpackChunkName: "components/home" */).then(c => wrapFunctional(c.default || c))
export const LazyLocations = import('../../components/Locations.vue' /* webpackChunkName: "components/locations" */).then(c => wrapFunctional(c.default || c))
export const LazyWish = import('../../components/Wish.vue' /* webpackChunkName: "components/wish" */).then(c => wrapFunctional(c.default || c))
