import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/adapterPage',
        name: 'adapterPage',
        component: () => import(/* webpackChunkName: "about" */ '../views/AdapterPage.vue')
    },
    {
        path: '/',
        name: 'helloWorld',
        component: () => import(/* webpackChunkName: "about" */ '../components/HelloWorld.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
