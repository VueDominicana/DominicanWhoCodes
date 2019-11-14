import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import "./config"
import "./config/libs/bootstrap";
import "./config/libs/fa-icons";
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/style/custom.css';

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
