import Bookables from './bookables/Bookables';
import VueRouter from 'vue-router';

const routes = [
    {
        path: '/',
        component: Bookables,
        name: 'home',
    }
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
