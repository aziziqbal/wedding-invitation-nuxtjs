import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueCarousel from 'vue-carousel'
import fullscreen from 'vue-fullscreen'
Vue.use(fullscreen)
Vue.use(VueCarousel)
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// import { createApp } from 'vue';
import VueCountdown from '@chenfengyuan/vue-countdown';
Vue.use(VueCountdown)
// const app = createApp({});

// app.component(VueCountdown.name, VueCountdown);