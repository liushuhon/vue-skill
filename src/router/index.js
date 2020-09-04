import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/hist-chart',
        name: 'histChart',
        component: () => import(/* webpackChunkName: "about" */ '../components/echarts/HistChart.vue')
    },
    {
        path: '/page',
        name: 'page',
        component: () => import(/* webpackChunkName: "about" */ '../views/Page.vue')
    },
    {
        path: '/adapter-page',
        name: 'adapterPage',
        component: () => import(/* webpackChunkName: "about" */ '../views/AdapterPage.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
