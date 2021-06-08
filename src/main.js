// import 'materialize-css';
// import 'materialize-css/dist/css/materialize.css'
import Vue from "vue";
import "@/styles/main.scss";
import App from "@/App.vue";

import msToMm from '@/filters/ms-to-mm';
import blur from '@/directives/blur';
import print from '@/directives/print';

import EventBus from "@/plugins/event-bus";
import router from "./router";
import store from './store';

Vue.config.productionTip = false;

Vue.use(EventBus);
Vue.use(msToMm);
Vue.use(blur);
Vue.use(print);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
