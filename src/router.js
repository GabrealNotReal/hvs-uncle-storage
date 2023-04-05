import { createRouter, createWebHistory} from 'vue-router';

import logIn from './components/authentication.vue'
import mainHeader from './components/mainPage.vue'
import arrival from './components/arrival.vue'
import departure from './components/departure.vue'
import stock from './components/stock.vue'

const routes = [
    {
        path: "/uncle-storage",
        component: logIn,
        name: "logIn",
    },
    
    {
        path: "/uncle-storage/arrival",
        components:{
            default: mainHeader , 
            page: arrival
        },
        name: "arrival",
    },
    
    {
        path: "/uncle-storage/departure",
        components:{
            default: mainHeader , 
            page: departure
        },
        name: "departure",
    },
    
    {
        path: "/uncle-storage/stock",
        components:{
            default: mainHeader , 
            page: stock
        },
        name: "stock",
    },
]


const router = createRouter({    
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from , next) => {
    if (from.name == 'logIn' || from.name == 'arrival' || from.name == 'departure' || from.name == 'stock'){
        next()
    }
    else if(to.name == 'logIn'){
        next()
    }
    else{
        next({name:'logIn'})
    }
  })

export default router;