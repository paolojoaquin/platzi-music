// import 'materialize-css';
// import 'materialize-css/dist/css/materialize.css'
import Vue from "vue";
import '@/styles/main.scss';
import App from "@/App.vue";

import EventBus from '@/plugins/event-bus';

Vue.config.productionTip = false;

Vue.use(EventBus)

new Vue({
  render: (h) => h(App),
}).$mount("#app");