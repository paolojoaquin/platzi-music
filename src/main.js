// import 'materialize-css';
// import 'materialize-css/dist/css/materialize.css'
import Vue from "vue";
import "@/styles/main.scss";
import App from "@/App.vue";

import EventBus from "@/plugins/event-bus";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(EventBus);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
