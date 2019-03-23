import Vue from "vue";
import App from "./app.vue";
import router from "./router";
import store from "./store";
import iView from "iview";

import "iview/dist/styles/iview.css";

Vue.use(iView);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    this.$router.push("/");
  }
}).$mount("#app");
