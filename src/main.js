<<<<<<< HEAD
import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
=======
import { createApp } from "vue";
// import 'materialize-css';
// import 'materialize-css/dist/css/materialize.css'
import '@/styles/main.scss';
import App from "./App.vue";

createApp(App).mount("#app");
>>>>>>> 16939a196b01c99f20db3bbb8245095d91034aba
