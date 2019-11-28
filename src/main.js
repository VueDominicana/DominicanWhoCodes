import Vue from 'vue'
import App from './App'
import VueLazyLoad from 'vue-lazyload'
import router from './router'
import store from './store'
import "./config"
import "./config/libs/bootstrap";
import "./config/libs/fa-icons";
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/style/custom.css';
import "./registerServiceWorker";

Vue.use(BootstrapVue)
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  attempt: 3,
})

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
