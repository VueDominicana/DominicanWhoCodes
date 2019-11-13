import Vue from 'vue'
import Router from 'vue-router'
import DevelopersList from './views/DevelopersList'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'developers-list',
        component: DevelopersList
    }]
})
