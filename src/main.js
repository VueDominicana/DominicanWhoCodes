import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./config/libs/bootstrap";
import "./config/libs/fa-icons";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
