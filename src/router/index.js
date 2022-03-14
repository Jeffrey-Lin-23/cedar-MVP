import {createRouter,createWebHistory} from "vue-router";
import Home from '../views/Home.vue'
import LiquidityPool from '../views/LiquidityPool.vue'
import PayLater from '../views/PayLater.vue'
import Summary from '../views/Summary.vue'
import Listed from '../views/Listed.vue'
import Market from '../views/Market.vue'
import Collection from '../views/Collection.vue'
import Detail from '../views/Detail.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Market
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
    {
        path: '/Collection/:cname',
        name: 'Collection',
        component: Collection
    },
    // {
    //     path: '/Payment',
    //     name: 'Payment',
    //     component: Payment
    // },
    {
        path: '/Listed',
        name: 'Listed',
        component: Listed
    },
    {
        path: '/Detail/:num',
        name: 'Detail',
        component: Detail
    }

];

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;