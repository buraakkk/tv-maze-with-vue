//import packages
import Vue from "vue";

// import files
import App from "./App.vue";
import "./quasar";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
