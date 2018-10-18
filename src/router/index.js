import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'signin',
        component: () => import('@/components/signin')
    },
    {
        path: '/deals',
        name: 'deals',
        component: () => import('@/components/deals'),
    },
    {
        path: '/accounts',
        name: 'accounts',
        component: () => import('@/components/accounts'),
    },
    {
        path: '/friends',
        name: 'friends',
        component: () => import('@/components/friends'),
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/components/dashboard'),
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})
