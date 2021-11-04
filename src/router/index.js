import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/test',
        name: 'adapterPage',
        component: () => import(/* webpackChunkName: "about" */ '../views/AdapterPage.vue')
    },
    // {
    //     path: '/',
    //     name: 'VideoTest',
    //     component: () => import(/* webpackChunkName: "about" */ '../views/BaseVideo.vue')
    // },
    // {
    //     path: '/test-build-com',
    //     name: 'VideoTest',
    //     component: () => import(/* webpackChunkName: "about" */ '../views/BuildView.vue')
    // },
    // {
    //     path: '/ace_editor',
    //     name: 'ace',
    //     component: () => import(/* webpackChunkName: "about" */ '../views/AceTest.vue')
    // },
    {
        path: '/',
        name: 'timeline',
        component: () => import(/* webpackChunkName: "about" */ '../views/TimeLinePage.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
