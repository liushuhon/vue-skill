import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'layout',
        redirect: 'learn',
        component: () => import('../components/layout.vue'),
        children: [
            {
                path: '/learn',
                name: 'learn',
                component: () => import(/* webpackChunkName: "about" */ '../views/CssLearn.vue')
            },
            {
                path: '/one',
                name: 'one',
                component: () => import(/* webpackChunkName: "about" */ '../components/chapter_one/01border.vue')
            },
            {
                path: '/background',
                name: 'background',
                component: () => import(/* webpackChunkName: "about" */ '../components/chapter_one/Background.vue')
            },
            {
                path: '/linear-gradient',
                name: 'LinearGradient',
                component: () => import(/* webpackChunkName: "about" */ '../components/chapter_one/LinearGradient.vue')
            }
        ]
    },
    {
        path: '/',
        name: 'adapterPage',
        component: () => import(/* webpackChunkName: "about" */ '../views/AdapterPage.vue')
    },
    {
        path: '/filter',
        name: 'filter',
        component: () => import(/* webpackChunkName: "about" */ '../components/chapter_one/Filter.vue')
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
