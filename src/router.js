import Vue from 'vue'
import Router from 'vue-router'
import DevelopersList from './views/DevelopersList'
import Nominate from './views/Nominate'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'developers-list',
        component: DevelopersList
    }, 
    {
        path: '/nominate',
        name: 'nominate',
        component: Nominate
    }]
})
