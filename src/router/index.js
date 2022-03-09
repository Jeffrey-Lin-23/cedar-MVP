import {createRouter,createWebHistory} from "vue-router";
import Home from '../views/Home.vue'
import LiquidityPool from '../views/LiquidityPool.vue'
import PayLater from '../views/PayLater.vue'
import Summary from '../views/Summary.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Liquidity-Pool',
        name: 'LiquidityPool',
        component: LiquidityPool
    },
    {
        path: '/Pay-Later',
        name: 'PayLater',
        component: PayLater
    },
    {
        path: '/Summary',
        name: 'Summary',
        component: Summary
    },
    // {
    //     path: '/Payment',
    //     name: 'Payment',
    //     component: Payment
    // },
    // {
    //     path: '/Listed',
    //     name: 'Listed',
    //     component: Listed
    // },
    // {
    //     path: '/Markets',
    //     name: 'Markets',
    //     component: Markets,
    // },
];

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;